'use client'

import { useState, useEffect } from 'react'
import { usersApi } from '@/lib/api'
import { useAuth } from '@/lib/auth'
import { 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Palette, 
  Shield,
  Save,
  Eye,
  EyeOff,
  Camera,
  Mail,
  Phone
} from 'lucide-react'
import toast from 'react-hot-toast'

interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  phone?: string
  language: string
  timezone: string
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  theme: 'light' | 'dark' | 'auto'
}

export default function SettingsPage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    new_password: '',
    confirm_password: ''
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  })

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      setLoading(true)
      const response = await usersApi.getProfile()
      setProfile({
        ...response.data,
        notifications: response.data.notifications || {
          email: true,
          push: true,
          sms: false
        },
        theme: response.data.theme || 'light',
        language: response.data.language || 'zh-CN',
        timezone: response.data.timezone || 'Asia/Shanghai'
      })
    } catch (error) {
      console.error('Failed to load profile:', error)
      toast.error('加载用户信息失败')
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    if (!profile) return

    try {
      setSaving(true)
      await usersApi.updateProfile({
        name: profile.name,
        avatar: profile.avatar
      })
      toast.success('个人信息保存成功')
    } catch (error) {
      console.error('Failed to save profile:', error)
      toast.error('保存个人信息失败')
    } finally {
      setSaving(false)
    }
  }

  const handleChangePassword = async () => {
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error('新密码和确认密码不匹配')
      return
    }

    if (passwordForm.new_password.length < 6) {
      toast.error('新密码长度至少6位')
      return
    }

    try {
      setSaving(true)
      await usersApi.changePassword({
        current_password: passwordForm.current_password,
        new_password: passwordForm.new_password
      })
      
      setPasswordForm({
        current_password: '',
        new_password: '',
        confirm_password: ''
      })
      toast.success('密码修改成功')
    } catch (error) {
      console.error('Failed to change password:', error)
      toast.error('密码修改失败')
    } finally {
      setSaving(false)
    }
  }

  const tabs = [
    { id: 'profile', name: '个人信息', icon: User },
    { id: 'security', name: '安全设置', icon: Lock },
    { id: 'notifications', name: '通知设置', icon: Bell },
    { id: 'preferences', name: '偏好设置', icon: Palette },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* 页面头部 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">系统设置</h1>
        <p className="text-gray-600 mt-1">管理您的账号和偏好设置</p>
      </div>

      <div className="flex">
        {/* 侧边栏 */}
        <div className="w-64 bg-white rounded-lg shadow mr-6">
          <nav className="p-4">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className={`mr-3 h-5 w-5 ${
                    activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  {tab.name}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* 主内容区 */}
        <div className="flex-1 bg-white rounded-lg shadow">
          {activeTab === 'profile' && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">个人信息</h2>
              
              {profile && (
                <div className="space-y-6">
                  {/* 头像 */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="h-20 w-20 bg-gray-300 rounded-full flex items-center justify-center">
                        {profile.avatar ? (
                          <img 
                            src={profile.avatar} 
                            alt="Avatar" 
                            className="h-20 w-20 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-10 w-10 text-gray-600" />
                        )}
                      </div>
                      <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                      <p className="text-sm text-gray-500">{profile.email}</p>
                      <button className="mt-2 text-sm text-blue-600 hover:text-blue-500">
                        更换头像
                      </button>
                    </div>
                  </div>

                  {/* 基本信息 */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        className="input"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          className="input pl-10"
                          value={profile.email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        手机号
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          className="input pl-10"
                          value={profile.phone || ''}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          placeholder="请输入手机号"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        用户ID
                      </label>
                      <input
                        type="text"
                        className="input"
                        value={profile.id}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveProfile}
                      disabled={saving}
                      className="btn-primary disabled:opacity-50"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {saving ? '保存中...' : '保存更改'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'security' && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">安全设置</h2>
              
              <div className="space-y-6">
                {/* 修改密码 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-md font-medium text-gray-900 mb-4">修改密码</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        当前密码
                      </label>
                      <div className="relative">
                        <input
                          type={showPasswords.current ? 'text' : 'password'}
                          className="input pr-10"
                          value={passwordForm.current_password}
                          onChange={(e) => setPasswordForm({ 
                            ...passwordForm, 
                            current_password: e.target.value 
                          })}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPasswords({ 
                            ...showPasswords, 
                            current: !showPasswords.current 
                          })}
                        >
                          {showPasswords.current ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        新密码
                      </label>
                      <div className="relative">
                        <input
                          type={showPasswords.new ? 'text' : 'password'}
                          className="input pr-10"
                          value={passwordForm.new_password}
                          onChange={(e) => setPasswordForm({ 
                            ...passwordForm, 
                            new_password: e.target.value 
                          })}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPasswords({ 
                            ...showPasswords, 
                            new: !showPasswords.new 
                          })}
                        >
                          {showPasswords.new ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        确认新密码
                      </label>
                      <div className="relative">
                        <input
                          type={showPasswords.confirm ? 'text' : 'password'}
                          className="input pr-10"
                          value={passwordForm.confirm_password}
                          onChange={(e) => setPasswordForm({ 
                            ...passwordForm, 
                            confirm_password: e.target.value 
                          })}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPasswords({ 
                            ...showPasswords, 
                            confirm: !showPasswords.confirm 
                          })}
                        >
                          {showPasswords.confirm ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleChangePassword}
                      disabled={saving}
                      className="btn-primary disabled:opacity-50"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      {saving ? '修改中...' : '修改密码'}
                    </button>
                  </div>
                </div>

                {/* 安全信息 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-md font-medium text-gray-900 mb-4">安全信息</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">最后登录时间:</span>
                      <span className="text-gray-900">2024-01-15 14:30:25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">登录IP:</span>
                      <span className="text-gray-900">192.168.1.100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">账号状态:</span>
                      <span className="text-green-600">正常</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && profile && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">通知设置</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">邮件通知</h3>
                      <p className="text-sm text-gray-500">接收重要系统通知和消息提醒</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={profile.notifications.email}
                        onChange={(e) => setProfile({
                          ...profile,
                          notifications: {
                            ...profile.notifications,
                            email: e.target.checked
                          }
                        })}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">推送通知</h3>
                      <p className="text-sm text-gray-500">浏览器推送通知</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={profile.notifications.push}
                        onChange={(e) => setProfile({
                          ...profile,
                          notifications: {
                            ...profile.notifications,
                            push: e.target.checked
                          }
                        })}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">短信通知</h3>
                      <p className="text-sm text-gray-500">紧急情况下的短信提醒</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={profile.notifications.sms}
                        onChange={(e) => setProfile({
                          ...profile,
                          notifications: {
                            ...profile.notifications,
                            sms: e.target.checked
                          }
                        })}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="btn-primary disabled:opacity-50"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {saving ? '保存中...' : '保存设置'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && profile && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">偏好设置</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      语言
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        className="input pl-10"
                        value={profile.language}
                        onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                      >
                        <option value="zh-CN">中文（简体）</option>
                        <option value="zh-TW">中文（繁体）</option>
                        <option value="en-US">English</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      时区
                    </label>
                    <select
                      className="input"
                      value={profile.timezone}
                      onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                    >
                      <option value="Asia/Shanghai">Asia/Shanghai (UTC+8)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
                      <option value="America/New_York">America/New_York (UTC-5)</option>
                      <option value="Europe/London">Europe/London (UTC+0)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    主题
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {['light', 'dark', 'auto'].map((theme) => (
                      <label key={theme} className="relative">
                        <input
                          type="radio"
                          name="theme"
                          value={theme}
                          checked={profile.theme === theme}
                          onChange={(e) => setProfile({ ...profile, theme: e.target.value as any })}
                          className="sr-only peer"
                        />
                        <div className="p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <div className="text-center">
                            <Palette className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                            <span className="text-sm font-medium text-gray-900">
                              {theme === 'light' ? '浅色' : theme === 'dark' ? '深色' : '自动'}
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="btn-primary disabled:opacity-50"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {saving ? '保存中...' : '保存设置'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}