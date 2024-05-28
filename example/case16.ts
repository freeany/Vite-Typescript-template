interface Animal {
  name: string
  eat: () => void
}

interface Dog extends Animal {
  // bark(dog: Dog): void
  bark: (dog: Dog) => void
}

interface YellowDog extends Dog {
  // 大黄狗是友善的
  friendly: () => void
}

const dog1: Dog = {
  name: '狗狗',
  eat() {
    console.log('吃骨头')
  },
  bark(dog: Animal) {
    console.log(dog.name + 'wangwang')
  }
}

const dog2: Dog = {
  name: '狗狗',
  eat() {
    console.log('吃骨头')
  },
  bark(dog: Dog) {
    console.log(dog.name + 'wangwang')
  }
}

const xiaohuang: YellowDog = {
  name: '小黄',
  eat() {
    console.log('吃狗粮')
  },
  bark(dog: YellowDog) {
    console.log(dog.friendly() + dog.name + 'wuwu')
  },
  friendly() {
    console.log('友善的小黄')
  }
}

xiaohuang.bark(dog1)

export {}
