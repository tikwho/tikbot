'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  Home, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings,
  Inbox,
  UserCheck
} from 'lucide-react'

const navigation = [
  { name: '首页', href: '/dashboard', icon: Home },
  { name: '我的对话', href: '/dashboard/inbox/my', icon: MessageSquare },
  { name: '全部对话', href: '/dashboard/inbox/all', icon: Inbox },
  { name: '账号管理', href: '/dashboard/accounts', icon: Users },
  { name: '团队管理', href: '/dashboard/team', icon: UserCheck },
  { name: '数据报表', href: '/dashboard/analytics', icon: BarChart3 },
  { name: '系统设置', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen">
      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 h-5 w-5 flex-shrink-0
                    ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                  `}
                />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* 底部状态 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="ml-3">
            <p className="text-xs text-gray-500">系统状态</p>
            <p className="text-sm font-medium text-gray-900">正常运行</p>
          </div>
        </div>
      </div>
    </div>
  )
}