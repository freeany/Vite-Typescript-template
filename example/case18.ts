const dog1: Dog = {
  name: 'a',
  eat() {},
  bark(dog: Dog) {}
}

const dog2: Dog = {
  name: 'b',
  eat() {},
  bark(dog: Dog) {}
}

const animal1: Animal = {
  name: 'c',
  eat() {}
}
let dogList: Dog[] = [dog1, dog2]

let animalList: Animal[] = dogList

function checkIfAnimalsAreAwake(arr: Animal[]) {}

let myPets: Dog[] = [dog1, dog2]

// Error? Can't substitute Dog[] for Animal[]?
checkIfAnimalsAreAwake(myPets)
