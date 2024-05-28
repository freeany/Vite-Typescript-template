interface Value {
  id: number
  title: string
}

const config1 = {
  a: {
    id: 1,
    title: 'a'
  },
  b: {
    id: 2,
    title: 'b'
  }
  // ...
}

const config2: Record<string, Value> = {
  a: {
    id: 1,
    title: 'a'
  },
  b: {
    id: 2,
    title: 'b'
  }
} as const

const testFun1 = (key: keyof typeof config1): void => {
  console.log(key)
}

const testFun2 = (key: keyof typeof config2): void => {
  console.log(key)
}

testFun1('') // "a" | "b"...
testFun2('') // string

// 想让config2限制为Value类型，又让testFun的key参数只能传config中定义的key。
// config的key有很多，如果 Record<string, Value>的string写成联合类型的话又相当于重复了一边key，
// 使用satisfies：
const config3 = {
  a: {
    id: 1,
    title: 'a'
  },
  b: {
    id: 2,
    title: 'b'
  }
  // ...
} satisfies Record<string, Value>
