declare const nono: unique symbol

export const createSet: <T = typeof nono>(
  ...args: T extends typeof nono ? ["you should pass a type argument to createSet", never] : number
) => Set<T> = () => new Set()

// export const mySet = createSet()

export const mySetOk = createSet<number>([1,2,3])
