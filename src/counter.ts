import { getHomeData } from './service/modules/home'
export function setupCounter(element: HTMLButtonElement) {
	let counter = 0
	const setCounter = (count: number) => {
		counter = count
		element.innerHTML = `count is ${counter}`
	}
	element.addEventListener('click', () => setCounter(counter + 1))
	setCounter(0)
	getHomeData().then(data => {
		console.log(data, '...///11')
	})
}
