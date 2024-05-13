class Parent {
  rich100() {
    return 100
  }
}

class Child extends Parent {
  rich1000() {
    return 1000
  }
}

class GrandSon extends Child {
  rich10000() {
    return 10000
  }
}

// 在声明接口类型时，我们在接口中定义一个方法
// interface MyArray<T> {
//   // 原型方法
//   // concat(...args: T[]): void // 不会开启逆变和协变，不会对参数进行逆变检测
//   // 实例方法
//   concat: (...args: T[]) => void // 会开启逆变和协变
// }

// declare let arr1: MyArray<Parent>
// declare let arr2: MyArray<Child>

// arr1 = arr2

let nibian: (instance: Child) => void = (instance: ParentGrandSon) => void 0
let xiebian: (instance: Child) => Child = (instance: Child) => new GrandSon()

export {}
