import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IResponseBase<T = any> extends AxiosResponse {
  data: T
}

export class ErrInternetDisconnected extends Error {
  name = 'ERR_INTERNET_DISCONNECTED';
  message = 'Verifique sua conexão com a internet';
}

export class ConnectionFailed extends Error {
  name = 'CONNECTION_FAILED';
  message = 'Não foi possível se comunicar com o servidor';
}

export class RouteNotFound extends Error {
  name = 'NOT_FOUND';
  message = 'Rota não encontrada';
}

export interface IRepository {
  api: AxiosInstance
  path: string
}

export class Repository<Type = any> {
  protected api: AxiosInstance;
  protected path: string;

  constructor ({ api, path }: IRepository) {
    this.api = api
    this.path = path
  }

  static async handle <T, > (request: () => Promise<AxiosResponse>): Promise<IResponseBase<T>> {
    try {
      const response: AxiosResponse = await request()
      return response
    } catch (err) {
      if (axios.isCancel(err)) throw err
      if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      if (!err.response) throw new ConnectionFailed()
      throw err.response.data
    }
  }

  async getAll (config?: AxiosRequestConfig): Promise<IResponseBase> {
    return Repository.handle(() =>
      this.api.get(this.path, config)
    )
  }

  async find (id: number, config?: AxiosRequestConfig): Promise<IResponseBase<{ [key: string]: Type }>> {
    return Repository.handle<{ [key: string]: Type }>(() =>
      this.api.get(`${this.path}/${id}`, config)
    )
  }

  async create (data: Type, config?: AxiosRequestConfig): Promise<IResponseBase> {
    return Repository.handle(() =>
      this.api.post(`${this.path}`, data, config)
    )
  }

  async update (id: number, data: Type, config?: AxiosRequestConfig): Promise<IResponseBase> {
    return Repository.handle(() =>
      this.api.put(`${this.path}/${id}`, data, config)
    )
  }

  async delete (id: number): Promise<IResponseBase> {
    return Repository.handle(() =>
      this.api.delete(`${this.path}/${id}`)
    )
  }
}
