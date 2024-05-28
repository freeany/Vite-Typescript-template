// 在react项目中尝试。
// ReactNode 与 Element。

// React.ReactNode：React 组件可以渲染的任何内容。JSX、字符串、null、undefined、数字。

// JSX.Element：仅代表 JSX
const example1: React.ReactNode = [<div></div>, 'hello', undefined, null, 123, false]

// React.ReactElement是JSX.Element的别名。
const example2: JSX.Element[] = [<div></div>, 'hello', undefined, null, 123, false]

export {}
