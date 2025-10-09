import axios from 'axios'
import toast from 'react-hot-toast'

export const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',//process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1',
  timeout: 10000,
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 添加时间戳防止缓存
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token 过期，清除本地存储并跳转到登录页
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
      window.location.href = '/login'
      return Promise.reject(error)
    }

    if (error.response?.status >= 500) {
      toast.error('服务器错误，请稍后重试')
    } else if (error.response?.data?.error?.message) {
      toast.error(error.response.data.error.message)
    } else if (error.response?.data?.message) {
      toast.error(error.response.data.message)
    } else if (error.message) {
      toast.error(error.message)
    }

    return Promise.reject(error)
  }
)

// API 方法
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (email: string, password: string, name: string, tenant_name: string) =>
    api.post('/auth/register', { email, password, name, tenant_name }),
  
  profile: () =>
    api.post('/auth/profile'),
  
  refresh: () =>
    api.post('/auth/refresh'),
}

export const conversationsApi = {
  getList: (params?: any) =>
    api.get('/conversations', { params }),
  
  getById: (id: string) =>
    api.get(`/conversations/${id}`),
  
  getMessages: (id: string, params?: any) =>
    api.get(`/conversations/${id}/messages`, { params }),
  
  sendMessage: (id: string, data: { content: string; message_type?: string; attachments?: any[] }) =>
    api.post(`/conversations/${id}/messages`, data),
  
  assign: (id: string, data: { agent_id: string }) =>
    api.put(`/conversations/${id}/assign`, data),
  
  close: (id: string) =>
    api.put(`/conversations/${id}/close`),
  
  markRead: (id: string) =>
    api.put(`/conversations/${id}/messages/read`),
}

export const accountsApi = {
  getList: () =>
    api.get('/accounts'),
  
  create: (data: any) =>
    api.post('/accounts', data),
  
  update: (id: string, data: any) =>
    api.put(`/accounts/${id}`, data),
  
  delete: (id: string) =>
    api.delete(`/accounts/${id}`),
  
  testProxy: (id: string) =>
    api.post(`/accounts/${id}/test-proxy`),
}

export const queuesApi = {
  getStatus: () =>
    api.get('/queues/status'),
  
  getItems: (params?: any) =>
    api.get('/queues/items', { params }),
}

export const teamsApi = {
  getCurrent: () =>
    api.get('/teams/current'),
  
  getMembers: () =>
    api.get('/teams/members'),
  
  invite: (data: { email: string; role: string; name: string }) =>
    api.post('/teams/invite', data),
}

export const usersApi = {
  getProfile: () =>
    api.get('/users/profile'),
  
  updateProfile: (data: { name?: string; avatar?: string }) =>
    api.put('/users/profile', data),
  
  changePassword: (data: { current_password: string; new_password: string }) =>
    api.put('/users/password', data),
}

export const metricsApi = {
  getSystem: () =>
    api.get('/metrics'),
  
  getAccounts: () =>
    api.get('/metrics/accounts'),
  
  getMessages: (params?: any) =>
    api.get('/metrics/messages', { params }),
}