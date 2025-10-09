'use client'

import { useState, useEffect } from 'react'
import { conversationsApi } from '@/lib/api'
import { useAuth } from '@/lib/auth'
import { 
  MessageSquare, 
  Clock, 
  User, 
  Search,
  Filter,
  UserPlus,
  CheckCircle,
  AlertCircle,
  Users
} from 'lucide-react'

interface Conversation {
  id: string
  account_id: string
  customer_id: string
  customer_name: string
  status: 'open' | 'assigned' | 'closed'
  assigned_to: string | null
  last_message: {
    content: string
    created_at: string
  }
  unread_count: number
  created_at: string
}

export default function AllInboxPage() {
  const { user } = useAuth()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [assignmentFilter, setAssignmentFilter] = useState<string>('all')
  const [selectedConversations, setSelectedConversations] = useState<string[]>([])

  useEffect(() => {
    loadConversations()
  }, [statusFilter, assignmentFilter])

  const loadConversations = async () => {
    try {
      setLoading(true)
      const params: any = {
        page: 1,
        limit: 100
      }
      
      if (statusFilter !== 'all') {
        params.status = statusFilter
      }

      if (assignmentFilter === 'unassigned') {
        params.assigned_to = null
      } else if (assignmentFilter === 'assigned') {
        params.assigned_to = 'not_null'
      }

      const response = await conversationsApi.getList(params)
      setConversations(response.data.data || [])
    } catch (error) {
      console.error('Failed to load conversations:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredConversations = conversations.filter(conv =>
    conv.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.last_message.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversations(prev => 
      prev.includes(conversationId)
        ? prev.filter(id => id !== conversationId)
        : [...prev, conversationId]
    )
  }

  const handleSelectAll = () => {
    if (selectedConversations.length === filteredConversations.length) {
      setSelectedConversations([])
    } else {
      setSelectedConversations(filteredConversations.map(conv => conv.id))
    }
  }

  const handleBatchAssign = async () => {
    if (selectedConversations.length === 0) return

    try {
      // 批量分配给当前用户
      await Promise.all(
        selectedConversations.map(id =>
          conversationsApi.assign(id, { agent_id: user?.agentId || '' })
        )
      )
      
      setSelectedConversations([])
      loadConversations()
    } catch (error) {
      console.error('Failed to assign conversations:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800'
      case 'assigned': return 'bg-blue-100 text-blue-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return '进行中'
      case 'assigned': return '已分配'
      case 'closed': return '已关闭'
      default: return status
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    
    if (diff < 60000) return '刚刚'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
    return date.toLocaleDateString('zh-CN')
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
            <h1 className="text-2xl font-bold text-gray-900">全部对话</h1>
            <p className="text-gray-600 mt-1">管理所有客户对话</p>
          </div>
          
          {selectedConversations.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                已选择 {selectedConversations.length} 个对话
              </span>
              <button
                onClick={handleBatchAssign}
                className="btn-primary"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                分配给我
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 搜索和过滤 */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索对话..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">全部状态</option>
            <option value="open">进行中</option>
            <option value="assigned">已分配</option>
            <option value="closed">已关闭</option>
          </select>

          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={assignmentFilter}
            onChange={(e) => setAssignmentFilter(e.target.value)}
          >
            <option value="all">全部分配状态</option>
            <option value="unassigned">未分配</option>
            <option value="assigned">已分配</option>
          </select>

          <button
            onClick={loadConversations}
            className="btn-secondary"
          >
            刷新
          </button>
        </div>
      </div>

      {/* 对话列表 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* 表头 */}
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-4"
              checked={selectedConversations.length === filteredConversations.length && filteredConversations.length > 0}
              onChange={handleSelectAll}
            />
            <div className="grid grid-cols-12 gap-4 flex-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-3">客户</div>
              <div className="col-span-4">最后消息</div>
              <div className="col-span-2">状态</div>
              <div className="col-span-2">分配</div>
              <div className="col-span-1">时间</div>
            </div>
          </div>
        </div>

        {/* 对话列表 */}
        <div className="divide-y divide-gray-200">
          {filteredConversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <MessageSquare className="h-12 w-12 mb-4" />
              <p>暂无对话</p>
            </div>
          ) : (
            filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-4"
                    checked={selectedConversations.includes(conversation.id)}
                    onChange={() => handleSelectConversation(conversation.id)}
                  />
                  
                  <div className="grid grid-cols-12 gap-4 flex-1">
                    {/* 客户信息 */}
                    <div className="col-span-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {conversation.customer_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {conversation.customer_id}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 最后消息 */}
                    <div className="col-span-4">
                      <p className="text-sm text-gray-900 truncate">
                        {conversation.last_message.content}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatTime(conversation.last_message.created_at)}
                      </p>
                    </div>

                    {/* 状态 */}
                    <div className="col-span-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                        {getStatusText(conversation.status)}
                      </span>
                      {conversation.unread_count > 0 && (
                        <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                          {conversation.unread_count}
                        </span>
                      )}
                    </div>

                    {/* 分配状态 */}
                    <div className="col-span-2">
                      {conversation.assigned_to ? (
                        <span className="inline-flex items-center text-xs text-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          已分配
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs text-yellow-600">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          未分配
                        </span>
                      )}
                    </div>

                    {/* 创建时间 */}
                    <div className="col-span-1">
                      <p className="text-xs text-gray-500">
                        {formatTime(conversation.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex items-center space-x-2 ml-4">
                    {!conversation.assigned_to && (
                      <button
                        onClick={() => handleBatchAssign()}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        分配
                      </button>
                    )}
                    <button className="text-gray-400 hover:text-gray-600">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 统计信息 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">总对话数</p>
              <p className="text-2xl font-semibold text-gray-900">{conversations.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-100">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">未分配</p>
              <p className="text-2xl font-semibold text-gray-900">
                {conversations.filter(c => !c.assigned_to).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">进行中</p>
              <p className="text-2xl font-semibold text-gray-900">
                {conversations.filter(c => c.status === 'open').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-gray-100">
              <Users className="h-6 w-6 text-gray-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">已关闭</p>
              <p className="text-2xl font-semibold text-gray-900">
                {conversations.filter(c => c.status === 'closed').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}