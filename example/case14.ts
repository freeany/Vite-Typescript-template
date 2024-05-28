/*
  在react中定义通用的forwardRef函数组件，具有类型提示
 */

import React from 'react'

const Table = <T>(
  props: {
    data: T[]
    renderRow: (row: T) => JSX.Element
  },
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  return (
    <table ref={ref}>
      <tbody>
        {props.data.map((item, index) => (
          <props.renderRow key={index} {...item} />
        ))}
      </tbody>
    </table>
  )
}

const ForwardReffedTable = React.forwardRef(Table)

function fixedForwardRef<T, P = object>(
  render: (props: P, ref: React.Ref<T>) => JSX.Element
): (props: P & React.RefAttributes<T>) => JSX.Element {
  // as any，因为我们无需返回值提示
  return React.forwardRef(render) as any
}

const ForwardReffedTable1 = fixedForwardRef(Table)
const App = () => {
  return (
    <>
      <Table
        // 1. 传递字符串数组
        data={['a', 'b']}
        // 2. row推断出来为字符串类型
        renderRow={row => {
          return <tr>{row}</tr>
        }}
      />
      {/* ------ */}
      <Table
        // 3. 传递字number数组
        data={[1, 2]}
        // 4. row推断出来为number类型
        renderRow={row => {
          return <tr>{row}</tr>
        }}
      />
      <ForwardReffedTable
        // 5. 传递字number数组
        data={[1, 2]}
        // 6. row推断出来为unkonwn类型
        // 7. 使用一个新的函数fixedForwardRef包裹forwardRef来处理这个情况
        renderRow={row => {
          return <tr>{row}</tr>
        }}
      />
      <ForwardReffedTable1
        // 8. 传递字number数组
        data={[1, 2]}
        // 9. row推断出来为number类型
        renderRow={row => {
          return <tr>{row}</tr>
        }}
      />
      ;
    </>
  )
}
export default App
