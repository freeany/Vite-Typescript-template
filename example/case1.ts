type SettledResult<T> = { status: 'fulfilled'; value: T } | { status: 'rejected'; reason: unknown }

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
