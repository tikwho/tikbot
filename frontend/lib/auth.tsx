'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from './api'
import toast from 'react-hot-toast'

interface User {
  id: string
  email: string
  name: string
  role: string
  tenantId: string
  teamId: string
  agentId: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string, tenant_name: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 从 localStorage 恢复登录状态
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('auth_user')

    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
      api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
    }

    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await api.post('/auth/login', { email, password })
      
      if (response.data.success === false) {
        toast.error(response.data.message || '登录失败')
        return false
      }
      
      if (response.data.access_token) {
        const { access_token, user: userData } = response.data
        
        setToken(access_token)
        setUser(userData)
        
        localStorage.setItem('auth_token', access_token)
        localStorage.setItem('auth_user', JSON.stringify(userData))
        
        api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        
        toast.success('登录成功')
        return true
      }
      
      return false
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.message || 
                          error.response?.data?.message || 
                          '登录失败'
      toast.error(errorMessage)
      return false
    }
  }

  const register = async (email: string, password: string, name: string, tenant_name: string): Promise<boolean> => {
    try {
      const response = await api.post('/auth/register', { email, password, name, tenant_name })
      
      if (response.data.access_token) {
        const { access_token, user: userData } = response.data
        
        setToken(access_token)
        setUser(userData)
        
        localStorage.setItem('auth_token', access_token)
        localStorage.setItem('auth_user', JSON.stringify(userData))
        
        api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        
        toast.success('注册成功')
        return true
      }
      
      return false
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.message || 
                          error.response?.data?.message || 
                          '注册失败'
      toast.error(errorMessage)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    
    delete api.defaults.headers.common['Authorization']
    
    router.push('/login')
    toast.success('已退出登录')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}