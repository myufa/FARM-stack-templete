import axios, { AxiosInstance, Method, AxiosRequestConfig } from "axios";

export abstract class BaseClient {
    baseURL: string = 'http://127.0.0.1:8080/'
    static CancelToken = axios.CancelToken
    static isCancel = axios.isCancel

    route: string
    client: AxiosInstance

    constructor(route: string) {
        this.route = route
        this.client = axios.create({baseURL: this.baseURL})
    }

    async callAPI(path: string, method: Method , data?: any, params?: any, headers: any = {}, options?: any) {
        const token = localStorage.getItem('token')
        const token_type = localStorage.getItem('token_type')
        var headers_str = ''

        if(token && token_type) {
            headers_str = token_type + ' ' + token
            headers['Authorization'] = headers_str
        }
        
        const result = await this.client.request({
            //withCredentials: true,
            url: this.route + path,
            method: method,
            data: data,
            params: params,
            headers: { ...headers },
            ...options
        })
        return result
    }

    async get(path: string, data?: any, params?: any, headers: any = {}, options?: any) {
        const result = await this.callAPI(path, 'get', data, params, headers, options)
        return result
    }

    async post(path: string, data?: any, params?: any, headers: any = {}, options?: any) {
        const result = await this.callAPI(path, 'post', data, params, headers, options)
        return result
    }
}
