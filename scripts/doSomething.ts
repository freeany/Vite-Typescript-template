enum Color {
	Red = '#ff0000',
	Green = '#00ff00',
	Blue = '#0000ff'
}
function changeTheme(color: Color.Red) {
	this.theme = color
}
changeTheme('Red') // error
changeTheme(Color.Red) // error
