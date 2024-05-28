interface Animal {
  name: string
  eat: () => void
}

interface Dog extends Animal {
  // bark(dog: Dog): void
  bark: (dog: Dog) => void
}

class Cat implements Animal {
  name: string
  eat: () => void
  miao: () => void
}
