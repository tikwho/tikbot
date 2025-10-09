'use client'

import { useState, useEffect } from 'react'
import { teamsApi, usersApi } from '@/lib/api'
import { useAuth } from '@/lib/auth'
import { 
  Users, 
  UserPlus, 
  Mail, 
  Shield, 
  MoreVertical,
  Crown,
  User,
  Settings,
  Trash2,
  Edit
} from 'lucide-react'
import toast from 'react-hot-toast'

interface TeamMember {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'agent'
  status: 'active' | 'inactive' | 'pending'
  last_login: string
  created_at: string
}

interface TeamInfo {
  id: string
  name: string
  description: string
  created_at: string
  member_count: number
}

export default function TeamPage() {
  const { user } = useAuth()
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null)
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [showInviteModal, setShowInviteModal] = useState(false)

  useEffect(() => {
    loadTeamData()
  }, [])

  const loadTeamData = async () => {
    try {
      setLoading(true)
      const [teamResponse, membersResponse] = await Promise.all([
        teamsApi.getCurrent(),
        teamsApi.getMembers()
      ])
      
      setTeamInfo(teamResponse.data)
      setMembers(membersResponse.data || [])
    } catch (error) {
      console.error('Failed to load team data:', error)
      toast.error('加载团队信息失败')
    } finally {
      setLoading(false)
    }
  }

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin': return '管理员'
      case 'manager': return '主管'
      case 'agent': return '坐席'
      default: return role
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800'
      case 'manager': return 'bg-blue-100 text-blue-800'
      case 'agent': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Crown className="h-4 w-4" />
      case 'manager': return <Shield className="h-4 w-4" />
      case 'agent': return <User className="h-4 w-4" />
      default: return <User className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '活跃'
      case 'inactive': return '非活跃'
      case 'pending': return '待激活'
      default: return status
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* 团队信息 */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{teamInfo?.name}</h1>
              <p className="text-gray-600 mt-1">{teamInfo?.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                <span>{members.length} 名成员</span>
                <span className="mx-2">•</span>
                <span>创建于 {teamInfo && formatTime(teamInfo.created_at)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="btn-secondary">
                <Settings className="h-4 w-4 mr-2" />
                团队设置
              </button>
              <button
                onClick={() => setShowInviteModal(true)}
                className="btn-primary"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                邀请成员
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">总成员</p>
              <p className="text-2xl font-semibold text-gray-900">{members.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-green-100">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">活跃成员</p>
              <p className="text-2xl font-semibold text-gray-900">
                {members.filter(m => m.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-purple-100">
              <Crown className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">管理员</p>
              <p className="text-2xl font-semibold text-gray-900">
                {members.filter(m => m.role === 'admin').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-100">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">待激活</p>
              <p className="text-2xl font-semibold text-gray-900">
                {members.filter(m => m.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 成员列表 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">团队成员</h3>
        </div>

        {members.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <Users className="h-12 w-12 mb-4" />
            <p>暂无团队成员</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {members.map((member) => (
              <div key={member.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-medium text-gray-900">{member.name}</h4>
                        {member.id === user?.id && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            我
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    {/* 角色 */}
                    <div className="text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
                        {getRoleIcon(member.role)}
                        <span className="ml-1">{getRoleText(member.role)}</span>
                      </span>
                    </div>

                    {/* 状态 */}
                    <div className="text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                        {getStatusText(member.status)}
                      </span>
                    </div>

                    {/* 最后登录 */}
                    <div className="text-right min-w-0">
                      <p className="text-sm text-gray-900">最后登录</p>
                      <p className="text-xs text-gray-500">
                        {member.last_login ? formatTime(member.last_login) : '从未登录'}
                      </p>
                    </div>

                    {/* 操作按钮 */}
                    {user?.role === 'admin' && member.id !== user?.id && (
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* 详细信息 */}
                <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">加入时间:</span>
                    <br />
                    {formatTime(member.created_at)}
                  </div>
                  <div>
                    <span className="font-medium">用户ID:</span>
                    <br />
                    <code className="text-xs bg-gray-100 px-1 rounded">{member.id.slice(0, 8)}...</code>
                  </div>
                  <div>
                    <span className="font-medium">权限级别:</span>
                    <br />
                    {getRoleText(member.role)}
                  </div>
                  <div>
                    <span className="font-medium">账号状态:</span>
                    <br />
                    {getStatusText(member.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 邀请成员模态框 */}
      {showInviteModal && (
        <InviteMemberModal
          onClose={() => setShowInviteModal(false)}
          onSuccess={() => {
            setShowInviteModal(false)
            loadTeamData()
          }}
        />
      )}
    </div>
  )
}

// 邀请成员模态框组件
function InviteMemberModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: 'agent'
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await teamsApi.invite(formData)
      toast.success('邀请发送成功')
      onSuccess()
    } catch (error) {
      console.error('Failed to invite member:', error)
      toast.error('发送邀请失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">邀请团队成员</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              邮箱地址 *
            </label>
            <input
              type="email"
              required
              className="input"
              placeholder="member@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              姓名 *
            </label>
            <input
              type="text"
              required
              className="input"
              placeholder="成员姓名"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              角色 *
            </label>
            <select
              required
              className="input"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="agent">坐席</option>
              <option value="manager">主管</option>
              <option value="admin">管理员</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              坐席：处理客户对话；主管：管理坐席和对话；管理员：完全权限
            </p>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? '发送中...' : '发送邀请'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}