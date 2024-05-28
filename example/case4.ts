const hobbies = ['swiming', 'jump', 'sing'] as const

type ArrEle = (typeof hobbies)[number]

// 同样的方式
type Unenumerate<T> = T extends Array<infer U> ? U : T extends ReadonlyArray<infer U> ? U : T

type ArrEle1 = Unenumerate<typeof hobbies>
