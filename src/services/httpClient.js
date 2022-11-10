import axios from 'axios'
import router from '../router'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const getAuthToken = () => localStorage.getItem('token')

const authInterceptor = (config) => {
  const token = getAuthToken()
  if (token !== '' && token !== null) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

httpClient.interceptors.request.use(authInterceptor)

const errorInterceptor = error => {
  if (error.response && error.response.status) {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      router.push('/login')
    }
  }
  return error.response
}

const responseInterceptor = response => {
  return response
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

export default httpClient
