export const setupCounter = () => {
	const obj = {
		name: 'obj4',
		getThis() {
			return this
		}
	}

	const objThis = obj.getThis.call({ a: 123 })

	console.log(objThis)
}
