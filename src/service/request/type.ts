import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface Result<T> {
	data: T
	retCode: number
	errMsg?: string
}
// 针对AxiosRequestConfig配置进行扩展
export interface Interceptors<T = InternalAxiosRequestConfig, U = any> {
	requestInterceptor?: (config: T) => T
	requestInterceptorCatch?: (err: any) => any
	responseInterceptor?: (res: AxiosResponse<Result<U>>) => AxiosResponse<Result<U>>
	responseInterceptorCatch?: (err: any) => any
}

export interface CreateRequestConfig<T = InternalAxiosRequestConfig, U = any> extends AxiosRequestConfig {
	interceptors?: Interceptors<T, U>
}
