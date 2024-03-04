import Http from '..'

// 发送网络请求
interface IHomeData {
	data: any
	returnCode: string
	success: boolean
}

export function getHomeData() {
	return Http.request<IHomeData>({
		url: '/home/multidata'
	}).then(res => {
		// console.log(res.data, res.success, res.returnCode)
		return res
	})
}
