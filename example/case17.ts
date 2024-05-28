interface Comparer<T> {
  compare: (a: T, b: T) => number
}

declare let animalComparer: Comparer<Animal>
declare let dogComparer: Comparer<Dog>

animalComparer = dogComparer // 错误
dogComparer = animalComparer // 正确

// 泛型也有协变和逆变
// https://www.tslang.cn/docs/release-notes/typescript-2.6.html
export {}
