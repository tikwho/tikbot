'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { Eye, EyeOff, MessageSquare, Users, Zap, Shield, BarChart3 } from 'lucide-react'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    tenantName: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()
  const router = useRouter()

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const success = await login(formData.email, formData.password)
      if (success) {
        router.push('/dashboard')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      return // 密码不匹配的错误会在UI中显示
    }

    if (formData.password.length < 6) {
      return // 密码长度错误会在UI中显示
    }

    setLoading(true)

    try {
      const success = await register(formData.email, formData.password, formData.name, formData.tenantName)
      if (success) {
        router.push('/dashboard')
      }
    } finally {
      setLoading(false)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex">
      {/* 左侧 Logo 和介绍区域 */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex flex-col justify-center px-8 lg:px-12">
        <div className="max-w-md mx-auto text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mr-4">
              <MessageSquare className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TikTok 客服工作台</h1>
              <p className="text-blue-100 text-sm">智能客服管理系统</p>
            </div>
          </div>

          {/* 功能介绍 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">为什么选择我们？</h2>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">多账号管理</h3>
                <p className="text-blue-100 text-sm">统一管理多个TikTok账号，提升工作效率</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">实时消息处理</h3>
                <p className="text-blue-100 text-sm">即时接收和回复客户消息，零延迟响应</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">安全可靠</h3>
                <p className="text-blue-100 text-sm">企业级安全保障，数据加密传输</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">数据分析</h3>
                <p className="text-blue-100 text-sm">详细的工作报表和性能分析</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-blue-100">
              "使用这个系统后，我们的客服效率提升了300%，客户满意度显著提高。"
            </p>
            <p className="text-xs text-blue-200 mt-2">— 某电商企业客服主管</p>
          </div>
        </div>
      </div>

      {/* 右侧登录/注册表单 */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-12 bg-white">
        <div className="max-w-md w-full">
          {/* 选项卡 */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-l-lg transition-colors ${
                activeTab === 'login'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              登录
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-r-lg transition-colors ${
                activeTab === 'register'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              注册
            </button>
          </div>

          {/* 登录表单 */}
          {activeTab === 'login' && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">欢迎回来</h2>
                <p className="text-gray-600">请登录您的坐席账号</p>
              </div>
              
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的邮箱"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                    密码
                  </label>
                  <div className="relative">
                    <input
                      id="login-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="请输入您的密码"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">记住我</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    忘记密码？
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      登录中...
                    </div>
                  ) : (
                    '登录'
                  )}
                </button>
              </form>
            </>
          )}

          {/* 注册表单 */}
          {activeTab === 'register' && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">创建账号</h2>
                <p className="text-gray-600">注册您的客服工作台账号</p>
              </div>
              
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址 *
                  </label>
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的邮箱"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-2">
                    用户名 *
                  </label>
                  <input
                    id="register-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的用户名"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="register-tenant" className="block text-sm font-medium text-gray-700 mb-2">
                    团队名称 *
                  </label>
                  <input
                    id="register-tenant"
                    name="tenantName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的团队名称"
                    value={formData.tenantName}
                    onChange={(e) => updateFormData('tenantName', e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                    密码 *
                  </label>
                  <div className="relative">
                    <input
                      id="register-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="请输入密码（至少6位）"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {formData.password && formData.password.length < 6 && (
                    <p className="text-red-500 text-xs mt-1">密码长度至少6位</p>
                  )}
                </div>

                <div>
                  <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                    确认密码 *
                  </label>
                  <div className="relative">
                    <input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="请再次输入密码"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">两次输入的密码不一致</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    我已阅读并同意
                    <a href="#" className="text-blue-600 hover:text-blue-500 ml-1">
                      服务条款
                    </a>
                    和
                    <a href="#" className="text-blue-600 hover:text-blue-500 ml-1">
                      隐私政策
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading || formData.password !== formData.confirmPassword || formData.password.length < 6}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      注册中...
                    </div>
                  ) : (
                    '创建账号'
                  )}
                </button>
              </form>
            </>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {activeTab === 'login' ? (
                <>
                  还没有账号？
                  <button 
                    onClick={() => setActiveTab('register')}
                    className="text-blue-600 hover:text-blue-500 font-medium ml-1"
                  >
                    立即注册
                  </button>
                </>
              ) : (
                <>
                  已有账号？
                  <button 
                    onClick={() => setActiveTab('login')}
                    className="text-blue-600 hover:text-blue-500 font-medium ml-1"
                  >
                    立即登录
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}