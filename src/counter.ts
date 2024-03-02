export function setupCounter(element: HTMLButtonElement) {
	let counter: string = 0
	const setCounter = (count: number) => {
		counter = count
		element.innerHTML = `count is ${counter}`
	}
	element.addEventListener('click', () => setCounter(counter + 1))
	setCounter(0)
}
