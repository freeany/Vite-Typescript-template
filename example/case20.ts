// 使用联合类型和映射类型和键重新映射，将可区分的联合类型转换为对象类型
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};


type Shape =
  | {
      type: 'circle'
      radius: number
    }
  | {
      type: 'square'
      sideLength: number
    }
  | {
      type: 'triangle'
      base: number
      height: number
  }
    
type UnionToObj = {
  [K in Shape as K['type']]: Prettify<Omit<K, 'type'>>
}

