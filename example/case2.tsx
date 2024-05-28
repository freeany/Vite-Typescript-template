// 复制到react项目中试一下
import React from 'react'
import { ElementRef, useEffect, useRef } from 'react'

// ElementRef 在 React 中标注 useRef 对应的元素类型 使用ElementRef可以精确元素类型。
const Component = () => {
  const imgRef = useRef<ElementRef<'img'>>(null)
  // 另外一种方式，这两种方式是相同的
  // const audioRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    imgRef.current
  }, [])

  return <img ref={imgRef} />
}

function App() {
  return <div className="App">App</div>
}

export default App
