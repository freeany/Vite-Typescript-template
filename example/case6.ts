// @errors: 2322
// type NoInfer<T> = [T][T extends any ? 0 : never];

// ---cut---

// 调用泛型函数时，TypeScript 能够根据传入的内容的关联关系推断参数的类型。
// BEFORE
declare function createFSM<TState extends string>(config: {
  // Without NoInfer, TS doesn't know which
  // TState is the source of truth
  initial: TState
  states: TState[]
}): TState

const example1 = createFSM({
  // 'initial' is allowed to be any string
  initial: 'not-allowed',
  states: ['open', 'closed']
})

// AFTER

declare function createFSM2<TState extends string>(config: {
  // With NoInfer, 'initial' is removed
  // as a candidate!
  initial: NoInfer<TState>
  states: TState[]
}): TState

createFSM2({
  initial: 'not-allowed',
  states: ['open', 'closed']
})

// 另外的解
// 解1: 在参数中多加了一个类型，明明是有关联的两个变量，却要声明两种不同的类型。
declare function createFSM3<V extends TState, TState extends string>(config: {
  // With NoInfer, 'initial' is removed
  // as a candidate!
  initial: V
  states: TState[]
}): TState

createFSM3({
  initial: 'not-allowed',
  states: ['open', 'closed']
})

// 解2
declare function createFSM4<V extends TState[number], TState extends string[]>(config: {
  // With NoInfer, 'initial' is removed
  // as a candidate!
  initial: V
  states: TState
}): TState

createFSM4({
  initial: 'not-allowed',
  states: ['open', 'closed'] as const
})
