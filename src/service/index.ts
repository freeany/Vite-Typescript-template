import { BASE_URL, TIME_OUT } from './config'
import Http from './request'

const myRequest = new Http({
	baseURL: BASE_URL,
	timeout: TIME_OUT
})

export const myRequest2 = new Http({
	baseURL: 'http://codercba.com:1888/airbnb/api',
	timeout: 8000,
	interceptors: {
		requestInterceptor: config => {
			console.log('爱彼迎的请求成功的拦截')
			return config
		},
		requestInterceptorCatch: err => {
			console.log('爱彼迎的请求失败的拦截')
			return err
		},
		responseInterceptor: res => {
			console.log('爱彼迎的响应成功的拦截')
			return res
		},
		responseInterceptorCatch: err => {
			console.log('爱彼迎的响应失败的拦截')
			return err
		}
	}
})

export default myRequest
