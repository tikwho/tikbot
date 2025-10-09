'use client'

import { useState, useEffect } from 'react'
import { metricsApi } from '@/lib/api'
import { useAuth } from '@/lib/auth'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  MessageSquare, 
  Clock, 
  Users,
  CheckCircle,
  AlertCircle,
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react'

interface SystemMetrics {
  total_accounts: number
  active_accounts: number
  expired_accounts: number
  expiring_soon: number
}

interface MessageMetrics {
  period: string
  total_sent: number
  total_received: number
  response_time: {
    average: number
    median: number
  }
  by_hour: Array<{
    hour: number
    sent: number
    received: number
  }>
}

export default function AnalyticsPage() {
  const { user } = useAuth()
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics | null>(null)
  const [messageMetrics, setMessageMetrics] = useState<MessageMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState('day')
  const [dateRange, setDateRange] = useState({
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    loadMetrics()
  }, [period])

  const loadMetrics = async () => {
    try {
      setLoading(true)
      const [systemRes, messageRes] = await Promise.all([
        metricsApi.getAccounts(),
        metricsApi.getMessages({ period })
      ])
      
      setSystemMetrics(systemRes.data)
      setMessageMetrics(messageRes.data)
    } catch (error) {
      console.error('Failed to load metrics:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}秒`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}分钟`
    return `${Math.floor(seconds / 3600)}小时`
  }

  const getPeriodText = (period: string) => {
    switch (period) {
      case 'day': return '今日'
      case 'week': return '本周'
      case 'month': return '本月'
      default: return period
    }
  }

  const StatCard = ({ 
    title, 
    value, 
    change,
    changeType = 'neutral',
    icon: Icon, 
    color = 'blue',
    subtitle 
  }: {
    title: string
    value: string | number
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    icon: any
    color?: string
    subtitle?: string
  }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`flex-shrink-0 p-3 rounded-lg bg-${color}-100`}>
            <Icon className={`h-6 w-6 text-${color}-600`} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        
        {change && (
          <div className={`flex items-center text-sm ${
            changeType === 'positive' ? 'text-green-600' : 
            changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
          }`}>
            {changeType === 'positive' && <TrendingUp className="h-4 w-4 mr-1" />}
            {changeType === 'negative' && <TrendingDown className="h-4 w-4 mr-1" />}
            {change}
          </div>
        )}
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
    <div className="p-6">
      {/* 页面头部 */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
            <p className="text-gray-600 mt-1">查看系统性能和使用统计</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="day">今日</option>
              <option value="week">本周</option>
              <option value="month">本月</option>
            </select>
            
            <button
              onClick={loadMetrics}
              className="btn-secondary"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              刷新
            </button>
            
            <button className="btn-primary">
              <Download className="h-4 w-4 mr-2" />
              导出报表
            </button>
          </div>
        </div>
      </div>

      {/* 系统概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="总账号数"
          value={systemMetrics?.total_accounts || 0}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="活跃账号"
          value={systemMetrics?.active_accounts || 0}
          change="+12%"
          changeType="positive"
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title="即将过期"
          value={systemMetrics?.expiring_soon || 0}
          icon={AlertCircle}
          color="yellow"
        />
        <StatCard
          title="已过期"
          value={systemMetrics?.expired_accounts || 0}
          icon={AlertCircle}
          color="red"
        />
      </div>

      {/* 消息统计 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title={`${getPeriodText(period)}发送`}
          value={messageMetrics?.total_sent || 0}
          change="+8.2%"
          changeType="positive"
          icon={MessageSquare}
          color="blue"
          subtitle="条消息"
        />
        <StatCard
          title={`${getPeriodText(period)}接收`}
          value={messageMetrics?.total_received || 0}
          change="+15.3%"
          changeType="positive"
          icon={MessageSquare}
          color="green"
          subtitle="条消息"
        />
        <StatCard
          title="平均响应时间"
          value={formatTime(messageMetrics?.response_time?.average || 0)}
          change="-5.1%"
          changeType="positive"
          icon={Clock}
          color="purple"
        />
        <StatCard
          title="中位响应时间"
          value={formatTime(messageMetrics?.response_time?.median || 0)}
          icon={Clock}
          color="indigo"
        />
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 消息趋势图 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">消息趋势</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>发送</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>接收</span>
              </div>
            </div>
          </div>
          
          {/* 简单的柱状图 */}
          <div className="h-64 flex items-end justify-between space-x-1">
            {messageMetrics?.by_hour?.slice(0, 12).map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col justify-end h-48 space-y-1">
                  <div 
                    className="bg-blue-500 rounded-t"
                    style={{ height: `${Math.max((data.sent / 50) * 100, 4)}%` }}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-t"
                    style={{ height: `${Math.max((data.received / 50) * 100, 4)}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2">{data.hour}:00</span>
              </div>
            ))}
          </div>
        </div>

        {/* 账号状态分布 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">账号状态分布</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span className="text-sm text-gray-700">活跃账号</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 mr-2">
                  {systemMetrics?.active_accounts || 0}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ 
                      width: `${((systemMetrics?.active_accounts || 0) / (systemMetrics?.total_accounts || 1)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                <span className="text-sm text-gray-700">即将过期</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 mr-2">
                  {systemMetrics?.expiring_soon || 0}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ 
                      width: `${((systemMetrics?.expiring_soon || 0) / (systemMetrics?.total_accounts || 1)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                <span className="text-sm text-gray-700">已过期</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 mr-2">
                  {systemMetrics?.expired_accounts || 0}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full"
                    style={{ 
                      width: `${((systemMetrics?.expired_accounts || 0) / (systemMetrics?.total_accounts || 1)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">健康度评分</h4>
            <div className="flex items-center">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                  style={{ 
                    width: `${((systemMetrics?.active_accounts || 0) / (systemMetrics?.total_accounts || 1)) * 100}%` 
                  }}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {Math.round(((systemMetrics?.active_accounts || 0) / (systemMetrics?.total_accounts || 1)) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 详细数据表格 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">详细统计</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  时间段
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  发送消息
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  接收消息
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  响应率
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  平均响应时间
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messageMetrics?.by_hour?.slice(0, 10).map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.hour}:00 - {data.hour + 1}:00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.sent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.received}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {data.received > 0 ? Math.round((data.sent / data.received) * 100) : 0}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatTime(Math.floor(Math.random() * 300) + 60)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}