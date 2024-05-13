declare function PromiseAllSettled<T extends readonly unknown[]>(
  promises: [...{ [K in keyof T]: Promise<T[K]> }]
): {
  [K in keyof T]: T[K]
}

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
PromiseAllSettled([p1, p2, p3])

type t<T> = keyof T

type d = t<[Promise<number>]> & {}
