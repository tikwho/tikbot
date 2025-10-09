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
  MoreVertical,
  CheckCircle,
  AlertCircle
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

export default function MyInboxPage() {
  const { user } = useAuth()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  useEffect(() => {
    loadConversations()
  }, [statusFilter])

  const loadConversations = async () => {
    try {
      setLoading(true)
      const params: any = {
        assigned_to: user?.agentId,
        page: 1,
        limit: 50
      }
      
      if (statusFilter !== 'all') {
        params.status = statusFilter
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
    <div className="h-full flex">
      {/* 对话列表 */}
      <div className="w-1/3 border-r border-gray-200 bg-white">
        {/* 搜索和过滤 */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索对话..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            <select
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">全部状态</option>
              <option value="open">进行中</option>
              <option value="assigned">已分配</option>
              <option value="closed">已关闭</option>
            </select>
          </div>
        </div>

        {/* 对话列表 */}
        <div className="overflow-y-auto h-full">
          {filteredConversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <MessageSquare className="h-12 w-12 mb-4" />
              <p>暂无对话</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {conversation.customer_name}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                          {getStatusText(conversation.status)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 truncate mb-2">
                        {conversation.last_message.content}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatTime(conversation.last_message.created_at)}
                        </span>
                        {conversation.unread_count > 0 && (
                          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {conversation.unread_count}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 对话详情 */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <ConversationDetail conversationId={selectedConversation} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageSquare className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">选择一个对话</h3>
              <p>从左侧列表中选择一个对话开始聊天</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// 对话详情组件
function ConversationDetail({ conversationId }: { conversationId: string }) {
  const [conversation, setConversation] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadConversationDetail()
  }, [conversationId])

  const loadConversationDetail = async () => {
    try {
      setLoading(true)
      const [convResponse, messagesResponse] = await Promise.all([
        conversationsApi.getById(conversationId),
        conversationsApi.getMessages(conversationId)
      ])
      
      setConversation(convResponse.data)
      setMessages(messagesResponse.data.data || [])
    } catch (error) {
      console.error('Failed to load conversation detail:', error)
    } finally {
      setLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    try {
      await conversationsApi.sendMessage(conversationId, {
        content: newMessage,
        message_type: 'text'
      })
      
      setNewMessage('')
      loadConversationDetail() // 重新加载消息
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      sendMessage()
    }
  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      {/* 对话头部 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {conversation?.customer_name}
            </h2>
            <p className="text-sm text-gray-500">
              客户ID: {conversation?.customer_id}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn-secondary">
              <User className="h-4 w-4 mr-2" />
              转接
            </button>
            <button className="btn-primary">
              <CheckCircle className="h-4 w-4 mr-2" />
              关闭对话
            </button>
          </div>
        </div>
      </div>

      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender_type === 'customer' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender_type === 'customer'
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.sender_type === 'customer' ? 'text-gray-500' : 'text-blue-100'
              }`}>
                {formatTime(message.created_at)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 消息输入 */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="输入消息... (Ctrl+Enter 发送)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            发送
          </button>
        </div>
      </div>
    </>
  )
}

function formatTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
  return date.toLocaleDateString('zh-CN')
}