import api from '../services/api'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ErrInternetDisconnected, ConnectionFailed } from './errors'


const resources = {
  address: async (cep: string) => {
    try {
      const response: AxiosResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      return response
    } catch (err) {
      if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      if (!err.response) throw new ConnectionFailed()
      throw err.response.data
    }
  },
}

export default resources
