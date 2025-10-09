'use client'

import { useState, useEffect } from 'react'
import { accountsApi } from '@/lib/api'
import { 
  Plus, 
  Search, 
  Settings, 
  Trash2, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Wifi,
  WifiOff,
  Edit,
  TestTube
} from 'lucide-react'
import toast from 'react-hot-toast'

interface Account {
  id: string
  name: string
  username: string
  is_active: boolean
  expires_at: string
  proxy_config?: {
    type: string
    host: string
    port: number
  }
  created_at: string
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingAccount, setEditingAccount] = useState<Account | null>(null)

  useEffect(() => {
    loadAccounts()
  }, [])

  const loadAccounts = async () => {
    try {
      setLoading(true)
      const response = await accountsApi.getList()
      setAccounts(response.data.data || [])
    } catch (error) {
      console.error('Failed to load accounts:', error)
      toast.error('加载账号列表失败')
    } finally {
      setLoading(false)
    }
  }

  const filteredAccounts = accounts.filter(account =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    account.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteAccount = async (accountId: string) => {
    if (!confirm('确定要删除这个账号吗？')) return

    try {
      await accountsApi.delete(accountId)
      toast.success('账号删除成功')
      loadAccounts()
    } catch (error) {
      console.error('Failed to delete account:', error)
      toast.error('删除账号失败')
    }
  }

  const handleTestProxy = async (accountId: string) => {
    try {
      const response = await accountsApi.testProxy(accountId)
      if (response.data.success) {
        toast.success(`代理测试成功 - IP: ${response.data.ip}`)
      } else {
        toast.error('代理测试失败')
      }
    } catch (error) {
      console.error('Failed to test proxy:', error)
      toast.error('代理测试失败')
    }
  }

  const getStatusColor = (account: Account) => {
    if (!account.is_active) return 'text-gray-500'
    
    const expiresAt = new Date(account.expires_at)
    const now = new Date()
    const daysUntilExpiry = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysUntilExpiry < 0) return 'text-red-500'
    if (daysUntilExpiry < 7) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getStatusIcon = (account: Account) => {
    if (!account.is_active) return <XCircle className="h-4 w-4" />
    
    const expiresAt = new Date(account.expires_at)
    const now = new Date()
    const daysUntilExpiry = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysUntilExpiry < 0) return <XCircle className="h-4 w-4" />
    if (daysUntilExpiry < 7) return <AlertCircle className="h-4 w-4" />
    return <CheckCircle className="h-4 w-4" />
  }

  const getStatusText = (account: Account) => {
    if (!account.is_active) return '已禁用'
    
    const expiresAt = new Date(account.expires_at)
    const now = new Date()
    const daysUntilExpiry = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysUntilExpiry < 0) return '已过期'
    if (daysUntilExpiry < 7) return `${daysUntilExpiry}天后过期`
    return '正常'
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
      {/* 页面头部 */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">账号管理</h1>
            <p className="text-gray-600 mt-1">管理 TikTok 账号和代理设置</p>
          </div>
          
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            添加账号
          </button>
        </div>
      </div>

      {/* 搜索和统计 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索账号..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100">
                <Wifi className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">总账号数</p>
                <p className="text-2xl font-semibold text-gray-900">{accounts.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">活跃账号</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {accounts.filter(a => a.is_active).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-100">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">即将过期</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {accounts.filter(a => {
                    const expiresAt = new Date(a.expires_at)
                    const now = new Date()
                    const daysUntilExpiry = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
                    return daysUntilExpiry >= 0 && daysUntilExpiry < 7
                  }).length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 账号列表 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">账号列表</h3>
        </div>

        {filteredAccounts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <Wifi className="h-12 w-12 mb-4" />
            <p>暂无账号</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredAccounts.map((account) => (
              <div key={account.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center ${getStatusColor(account)}`}>
                      {getStatusIcon(account)}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{account.name}</h4>
                      <p className="text-sm text-gray-500">@{account.username}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    {/* 状态信息 */}
                    <div className="text-right">
                      <p className={`text-sm font-medium ${getStatusColor(account)}`}>
                        {getStatusText(account)}
                      </p>
                      <p className="text-xs text-gray-500">
                        过期时间: {new Date(account.expires_at).toLocaleDateString('zh-CN')}
                      </p>
                    </div>

                    {/* 代理信息 */}
                    <div className="text-right">
                      {account.proxy_config ? (
                        <div>
                          <p className="text-sm text-gray-900">
                            {account.proxy_config.host}:{account.proxy_config.port}
                          </p>
                          <p className="text-xs text-gray-500">{account.proxy_config.type.toUpperCase()}</p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">无代理</p>
                      )}
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center space-x-2">
                      {account.proxy_config && (
                        <button
                          onClick={() => handleTestProxy(account.id)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="测试代理"
                        >
                          <TestTube className="h-4 w-4" />
                        </button>
                      )}
                      
                      <button
                        onClick={() => setEditingAccount(account)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="编辑"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      
                      <button
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        title="设置"
                      >
                        <Settings className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => handleDeleteAccount(account.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="删除"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 详细信息 */}
                <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">创建时间:</span>
                    <br />
                    {new Date(account.created_at).toLocaleDateString('zh-CN')}
                  </div>
                  <div>
                    <span className="font-medium">状态:</span>
                    <br />
                    <span className={`inline-flex items-center ${getStatusColor(account)}`}>
                      {account.is_active ? (
                        <><Wifi className="h-3 w-3 mr-1" /> 在线</>
                      ) : (
                        <><WifiOff className="h-3 w-3 mr-1" /> 离线</>
                      )}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">代理类型:</span>
                    <br />
                    {account.proxy_config?.type?.toUpperCase() || '无'}
                  </div>
                  <div>
                    <span className="font-medium">账号ID:</span>
                    <br />
                    <code className="text-xs bg-gray-100 px-1 rounded">{account.id.slice(0, 8)}...</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 添加账号模态框 */}
      {showAddModal && (
        <AddAccountModal
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            setShowAddModal(false)
            loadAccounts()
          }}
        />
      )}

      {/* 编辑账号模态框 */}
      {editingAccount && (
        <EditAccountModal
          account={editingAccount}
          onClose={() => setEditingAccount(null)}
          onSuccess={() => {
            setEditingAccount(null)
            loadAccounts()
          }}
        />
      )}
    </div>
  )
}

// 添加账号模态框组件
function AddAccountModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    encrypted_session: '',
    user_agent: '',
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    expires_at: '',
    proxy_type: '',
    proxy_host: '',
    proxy_port: '',
    proxy_username: '',
    proxy_password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data: any = {
        name: formData.name,
        username: formData.username,
        encrypted_session: formData.encrypted_session,
        user_agent: formData.user_agent,
        language: formData.language,
        timezone: formData.timezone,
        expires_at: formData.expires_at
      }

      if (formData.proxy_type && formData.proxy_host && formData.proxy_port) {
        data.proxy_config = {
          type: formData.proxy_type,
          host: formData.proxy_host,
          port: parseInt(formData.proxy_port),
          username: formData.proxy_username,
          password: formData.proxy_password
        }
      }

      await accountsApi.create(data)
      toast.success('账号添加成功')
      onSuccess()
    } catch (error) {
      console.error('Failed to create account:', error)
      toast.error('添加账号失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">添加 TikTok 账号</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                账号名称 *
              </label>
              <input
                type="text"
                required
                className="input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                用户名 *
              </label>
              <input
                type="text"
                required
                className="input"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              会话数据 *
            </label>
            <textarea
              required
              rows={3}
              className="input"
              placeholder="粘贴加密的会话数据..."
              value={formData.encrypted_session}
              onChange={(e) => setFormData({ ...formData, encrypted_session: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Agent
            </label>
            <input
              type="text"
              className="input"
              placeholder="Mozilla/5.0..."
              value={formData.user_agent}
              onChange={(e) => setFormData({ ...formData, user_agent: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                语言
              </label>
              <select
                className="input"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              >
                <option value="zh-CN">中文</option>
                <option value="en-US">English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                时区
              </label>
              <select
                className="input"
                value={formData.timezone}
                onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              >
                <option value="Asia/Shanghai">Asia/Shanghai</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                过期时间 *
              </label>
              <input
                type="datetime-local"
                required
                className="input"
                value={formData.expires_at}
                onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
              />
            </div>
          </div>

          {/* 代理设置 */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-md font-medium text-gray-900 mb-4">代理设置（可选）</h4>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  代理类型
                </label>
                <select
                  className="input"
                  value={formData.proxy_type}
                  onChange={(e) => setFormData({ ...formData, proxy_type: e.target.value })}
                >
                  <option value="">无代理</option>
                  <option value="http">HTTP</option>
                  <option value="https">HTTPS</option>
                  <option value="socks5">SOCKS5</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  代理地址
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="proxy.example.com"
                  value={formData.proxy_host}
                  onChange={(e) => setFormData({ ...formData, proxy_host: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  端口
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="8080"
                  value={formData.proxy_port}
                  onChange={(e) => setFormData({ ...formData, proxy_port: e.target.value })}
                />
              </div>
            </div>

            {formData.proxy_type && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    代理用户名
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.proxy_username}
                    onChange={(e) => setFormData({ ...formData, proxy_username: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    代理密码
                  </label>
                  <input
                    type="password"
                    className="input"
                    value={formData.proxy_password}
                    onChange={(e) => setFormData({ ...formData, proxy_password: e.target.value })}
                  />
                </div>
              </div>
            )}
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
              {loading ? '添加中...' : '添加账号'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// 编辑账号模态框组件
function EditAccountModal({ 
  account, 
  onClose, 
  onSuccess 
}: { 
  account: Account
  onClose: () => void
  onSuccess: () => void 
}) {
  const [formData, setFormData] = useState({
    name: account.name,
    is_active: account.is_active
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await accountsApi.update(account.id, formData)
      toast.success('账号更新成功')
      onSuccess()
    } catch (error) {
      console.error('Failed to update account:', error)
      toast.error('更新账号失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">编辑账号</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              账号名称
            </label>
            <input
              type="text"
              required
              className="input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              />
              <span className="text-sm text-gray-700">启用账号</span>
            </label>
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
              {loading ? '保存中...' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}