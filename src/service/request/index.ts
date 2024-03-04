import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CreateRequestConfig, Result } from './type'

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class Http {
	private instance: AxiosInstance
	private options: CreateRequestConfig
	constructor(config: CreateRequestConfig) {
		this.instance = axios.create(config)
		this.options = config
		// 每个instance实例都添加拦截器
		this.instance.interceptors.request.use(
			config => {
				console.log('全局请求成功的拦截')
				/**
				 * set your config
				 */
				// if (import.meta.env.VITE_APP_TOKEN_KEY && getToken()) {
				// 	// carry token
				// 	config.headers[import.meta.env.VITE_APP_TOKEN_KEY] = getToken()
				// }
				return config
			},
			err => {
				console.log('全局请求失败的拦截')
				return Promise.reject(err)
			}
		)
		this.instance.interceptors.response.use(
			res => {
				console.log('全局响应成功的拦截')
				return res.data
			},
			err => {
				console.log('全局响应失败的拦截')
				return err
			}
		)
		this.setInterceptors()
	}
	// 每个请求传递的拦截器
	setInterceptors() {
		const { interceptors } = this.options
		if (!interceptors) {
			return
		}
		const { requestInterceptor, requestInterceptorCatch, responseInterceptor, responseInterceptorCatch } = interceptors
		this.instance.interceptors.request.use(requestInterceptor, requestInterceptorCatch)
		this.instance.interceptors.response.use(responseInterceptor, responseInterceptorCatch)
	}
	// 封装网络请求的方法
	request<T = any>(config: CreateRequestConfig<AxiosRequestConfig, T>) {
		// url级别的成功拦截处理
		if (config.interceptors?.requestInterceptor) {
			config = config.interceptors.requestInterceptor(config)
		}

		// 返回Promise
		return new Promise<Result<T>>((resolve, reject) => {
			this.instance
				.request<any, Result<T>>(config)
				.then(res => {
					// url级别的响应的成功拦截处理
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors?.responseInterceptor(res)
					}
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	get<T = any>(config: AxiosRequestConfig<T>) {
		return this.request({ ...config, method: 'GET' })
	}
	post<T = any>(config: AxiosRequestConfig<T>) {
		return this.request({ ...config, method: 'POST' })
	}
	delete<T = any>(config: AxiosRequestConfig<T>) {
		return this.request({ ...config, method: 'DELETE' })
	}
	patch<T = any>(config: AxiosRequestConfig<T>) {
		return this.request({ ...config, method: 'PATCH' })
	}
}

export default Http
