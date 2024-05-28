type SettledResult<T> = { status: 'fulfilled'; value: T } | { status: 'rejected'; reason: unknown }

// 在元组上使用反向映射类型
// 在 TS 5.4 中，这将更简单，只需：`arg: { [K in keyof T ]: T[K] }`
declare function promiseAllSettled<T extends readonly unknown[]>(
  promises: [...{ [K in keyof T]: Promise<T[K]> }]
): {
  [K in keyof T]: SettledResult<T[K]>
}

const p1 = Promise.resolve('')
const p2 = Promise.resolve(10)
const p3 = Promise.resolve(true)

const result = promiseAllSettled([p1, p2, p3])
//    ^?

// third is ignored here
const [first, second] = promiseAllSettled([p1, p2, p3])

if (first.status === 'fulfilled') {
  first.value
  //    ^?
}

// original good case 5.4以后就可以这么做了。如果5.4以前只能(arg: [...{ [K in keyof T]: T[K] }])
// 相当于{ 0: xxx, 1: yyy } 在ts中的表现是[xxx, yyy]， 将对象与数组建立联系
// 由于 T 在这里有 `readonly unknown [] ` 的约束，TS 知道输出也将是数组/元组类型
declare function test1<T extends readonly unknown[]>(arg: {
  [K in keyof T]: T[K]
}): T
const result1 = test1(['foo', 42]) // [string, number]

declare function test2<T extends readonly unknown[]>(arg: T): T
const result2 = test2(['foo', 42]) // string | number)[]

declare function test3<const T extends readonly unknown[]>(arg: {
  [K in keyof T]: T[K]
}): T
const result3 = test3(['foo', 42]) // readonly ["foo", 42]

// 映射类型也适用于元组， 只要映射类型是同态的（也就是直接迭代“keyof T”）, 那么
/*
  T ==> [xxx,yyy]
  {
    [K in keyof T]: T[K]
  }
  会让 T[K]会让数组性得到保留，你传递数组输入，也会得到数组的输出
 */

type Tuple = [number, string]

type Partia1l<T> = { [P in keyof T]: T[P] }

type Result = Partia1l<Tuple>
//   ^? [number, string]
