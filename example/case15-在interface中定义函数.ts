interface Obj {
  // Method shorthand syntax
  version1(param: string): void
  // Object property syntax
  version2: (param: string) => void
}

interface Animal {
  eat: () => void
}

interface Cat extends Animal {
  miao(cat: Cat): void
}

interface PuppetCat extends Cat {
  // 在主人的世界中，只有布偶猫是友善的
  friendly: () => {}
}

const maomao1: Cat = {
  eat() {},
  miao(cat: PuppetCat) {
    cat.eat()
    cat.miao
    cat.friendly()
  }
}

const maomao2: Cat = {
  eat() {},
  miao() {}
}

maomao1.miao(maomao2)

class CC implements Cat {
  miao(cat: Cat) {}
  eat: () => void
}

console.log(CC)

export {}
