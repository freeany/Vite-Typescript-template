// 复制到react项目中试一下
// 使用ElementRef 将 useRef 与 forwardRef的类型保持一致
// 在不确定使用什么类型的情况下，可以使用ElementRef（获取forwardRef中的类型）
import { ElementRef, forwardRef, useEffect, useRef, useState } from 'react'

const Footer = forwardRef<HTMLImageElement, { a: number }>((props, ref) => {
  const [state, setState] = useState(0)
  console.log(props, 'props...')

  return (
    <div>
      <h1>{state}</h1>
      <img ref={ref} src="https://gitee.com/freeanyli/picture/raw/master/images.jpeg" alt="" srcSet="" width={20} height={20} />
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
})

function App() {
  type RefType = HTMLImageElement
  type RefType1 = ElementRef<typeof Footer>
  const ref = useRef<RefType1>(null) // 可以获取到forwardRef中的类型，所以可以保持同步。

  useEffect(() => {
    console.log(ref.current)
  }, [])
  return (
    <div>
      <h3>test</h3>
      <Footer a={1} ref={ref}></Footer>
    </div>
  )
}

export default App
