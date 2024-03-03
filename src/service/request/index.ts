import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MyRequestConfig } from './type'

// 拦截器: 蒙版Loading/token/修改配置
function getToken() {
	return '123'
}
/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class MyRequest {
	instance: AxiosInstance

	constructor(config: MyRequestConfig) {
		this.instance = axios.create(config)
		// 每个instance实例都添加拦截器
		this.instance.interceptors.request.use(
			config => {
				console.log('全局请求成功的拦截')
				/**
				 * set your config
				 */
				if (import.meta.env.VITE_APP_TOKEN_KEY && getToken()) {
					// carry token
					config.headers[import.meta.env.VITE_APP_TOKEN_KEY] = getToken()
				}
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
	}

	// 封装网络请求的方法
	request<T = any>(config: MyRequestConfig<T>) {
		// url级别的成功拦截处理
		if (config.interceptors?.requestSuccessFn) {
			config = config.interceptors.requestSuccessFn(config)
		}

		// 返回Promise
		return new Promise<T>((resolve, reject) => {
			this.instance
				.request<any, T>(config)
				.then(res => {
					// url级别的响应的成功拦截处理
					if (config.interceptors?.responseSuccessFn) {
						res = config.interceptors.responseSuccessFn(res)
					}
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	get<T = any>(config: MyRequestConfig<T>) {
		return this.request({ ...config, method: 'GET' })
	}
	post<T = any>(config: MyRequestConfig<T>) {
		return this.request({ ...config, method: 'POST' })
	}
	delete<T = any>(config: MyRequestConfig<T>) {
		return this.request({ ...config, method: 'DELETE' })
	}
	patch<T = any>(config: MyRequestConfig<T>) {
		return this.request({ ...config, method: 'PATCH' })
	}
}

export default MyRequest
