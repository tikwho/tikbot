'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth'
import { metricsApi, conversationsApi, accountsApi } from '@/lib/api'
import { 
  MessageSquare, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Activity,
  UserCheck
} from 'lucide-react'

interface DashboardStats {
  totalConversations: number
  activeConversations: number
  pendingConversations: number
  resolvedToday: number
  averageResponseTime: number
  activeAccounts: number
  totalAccounts: number
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalConversations: 0,
    activeConversations: 0,
    pendingConversations: 0,
    resolvedToday: 0,
    averageResponseTime: 0,
    activeAccounts: 0,
    totalAccounts: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      setLoading(true)
      
      // 并行获取数据
      const [conversationsRes, accountsRes, metricsRes] = await Promise.all([
        conversationsApi.getList({ limit: 1 }),
        accountsApi.getList(),
        metricsApi.getMessages({ period: 'day' })
      ])

      // 处理对话数据
      const conversations = conversationsRes.data.data || []
      const accounts = accountsRes.data.data || []
      const metrics = metricsRes.data || {}

      setStats({
        totalConversations: conversationsRes.data.pagination?.total || 0,
        activeConversations: conversations.filter((c: any) => c.status === 'open').length,
        pendingConversations: conversations.filter((c: any) => c.status === 'open' && !c.assigned_to).length,
        resolvedToday: metrics.total_sent || 0,
        averageResponseTime: metrics.response_time?.average || 0,
        activeAccounts: accounts.filter((a: any) => a.is_active).length,
        totalAccounts: accounts.length
      })
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}秒`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}分钟`
    return `${Math.floor(seconds / 3600)}小时`
  }

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color = 'blue',
    subtitle 
  }: {
    title: string
    value: string | number
    icon: any
    color?: string
    subtitle?: string
  }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`flex-shrink-0 p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* 欢迎区域 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          欢迎回来，{user?.name || '用户'}！
        </h1>
        <p className="text-gray-600 mt-2">
          今天是 {new Date().toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          })}，让我们开始高效的客服工作吧。
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="总对话数"
          value={stats.totalConversations}
          icon={MessageSquare}
          color="blue"
        />
        <StatCard
          title="活跃对话"
          value={stats.activeConversations}
          icon={Activity}
          color="green"
        />
        <StatCard
          title="待处理"
          value={stats.pendingConversations}
          icon={AlertCircle}
          color="yellow"
        />
        <StatCard
          title="今日已解决"
          value={stats.resolvedToday}
          icon={CheckCircle}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="平均响应时间"
          value={formatTime(stats.averageResponseTime)}
          icon={Clock}
          color="indigo"
        />
        <StatCard
          title="活跃账号"
          value={`${stats.activeAccounts}/${stats.totalAccounts}`}
          icon={UserCheck}
          color="green"
          subtitle="账号状态正常"
        />
        <StatCard
          title="工作效率"
          value="98.5%"
          icon={TrendingUp}
          color="emerald"
          subtitle="较昨日提升 2.3%"
        />
      </div>

      {/* 功能介绍区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 系统功能 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">系统功能</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">智能对话管理</h3>
                <p className="text-sm text-gray-600">
                  自动分配对话，智能路由到合适的坐席，支持多轮对话上下文理解
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">多账号统一管理</h3>
                <p className="text-sm text-gray-600">
                  支持同时管理多个TikTok账号，统一收件箱，提升工作效率
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">实时监控</h3>
                <p className="text-sm text-gray-600">
                  实时监控账号状态、消息处理情况，及时发现和解决问题
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">快速操作</h2>
          <div className="space-y-3">
            <a
              href="/dashboard/inbox/my"
              className="block w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">查看我的对话</h3>
                  <p className="text-sm text-gray-600">处理分配给我的客户对话</p>
                </div>
              </div>
            </a>

            <a
              href="/dashboard/accounts"
              className="block w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">管理账号</h3>
                  <p className="text-sm text-gray-600">添加或管理TikTok账号</p>
                </div>
              </div>
            </a>

            <button className="block w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">查看报表</h3>
                  <p className="text-sm text-gray-600">分析工作数据和绩效</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 使用提示 */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">💡 使用提示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium mb-1">快捷键：</p>
            <ul className="space-y-1">
              <li>• Ctrl + Enter：快速发送消息</li>
              <li>• Ctrl + /：搜索对话</li>
              <li>• Esc：关闭当前对话</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-1">最佳实践：</p>
            <ul className="space-y-1">
              <li>• 及时回复客户消息，保持良好体验</li>
              <li>• 使用模板回复提高效率</li>
              <li>• 定期检查账号状态</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}