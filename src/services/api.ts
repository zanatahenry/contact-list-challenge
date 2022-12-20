import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000
})

api.defaults.headers.post['Content-Type'] = 'application/json'

export default api