export const setupCounter = () => {
  function Enum(isEnum: boolean): MethodDecorator {
    return function (target, propertyKey, descriptor) {
      console.log('target: ', target)
      console.log('propertyKey: ', propertyKey)
      console.log('descriptor: ', descriptor)
      descriptor.enumerable = isEnum
    }
  }

  function ToUpper(isToUpper: boolean): PropertyDecorator {
    return function (target, propertyKey) {
      console.log('target', target) // 类的原型对象
      console.log('propertyKey', propertyKey) // 修饰的属性名称
    }
  }

  function valToUpper(isToUpper: boolean) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<string>) => {
      console.log('target: ', target)
      console.log('propertyKey: ', propertyKey)
      console.log('descriptor: ', descriptor)

      if (!isToUpper) return
      const originalGet = descriptor.get!

      descriptor.get = function () {
        return originalGet.call(this).toUpperCase()
      }
    }
  }
  class Animal {
    public name: string = 'aa'
    private _val = 'abc'
    // @Enum(true)
    eat() {
      console.log('anmial eat 方法')
    }

    @valToUpper(true)
    get val() {
      return this._val
    }
    set val(newVal: string) {
      this._val = newVal
    }
  }

  const animal = new Animal()
  console.log(animal.val)
}

setupCounter()
