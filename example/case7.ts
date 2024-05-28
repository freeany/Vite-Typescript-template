// const类型参数可以让泛型参数能够推断出正确的类型

declare function useStatus<T>(state: T[]): T
const result1 = useStatus(['loading', 'finished', 'error'])

declare function useStatus1<const T>(state: T[]): T
const result2 = useStatus1(['loading', 'finished', 'error'])

// 一个是const 泛型，一个是变量 as const
// const result1 = useStatus(['loading', 'finished', 'error'])
