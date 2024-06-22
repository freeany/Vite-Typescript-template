/**
 *
 * @param o1
 * @param o2
 * @returns {...o1, ...o2}
 * 实现mixin
 */
function mixin<T extends Record<string, any>, K extends Record<string, any>>(o1: T, o2: K): Omit<T, keyof K> & K {
  return { ...o1, ...o2 }
}
type GetType<T> = {
  [K in keyof T]: T[K]
}
const result = mixin({ name: 'qwe', age: 15, no: 99 }, { name: 12, age: 22, sex: 'man' })
type ResultType = GetType<typeof result>

function map<T extends keyof any, K, R>(obj: Record<T, K>, callback: (value: K, key: T) => R) {
  let result = {} as Record<T, R>
  for (let key in obj) {
    result[key] = callback(obj[key], key)
  }
  return result
}

const r = map({ name: 'aaa', age: 12 }, (value, key) => {
  return key + value
})

export {}
