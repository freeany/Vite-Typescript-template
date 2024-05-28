const formatters = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? 'true' : 'false')
}
const format = (input: string | number | boolean) => {
  // We need to cast here because TypeScript isn't quite smart
  // enough to know that `typeof input` can only be
  // 'string' | 'number' | 'boolean'
  const inputType = typeof input as 'string' | 'number' | 'boolean'
  const formatter = formatters[inputType]

  return formatter(11) // 因为as 'string' | 'number' | 'boolean'，编译器并不知道你传的是string还是number还是boolean，所以当调用formatters中的方法的时候ts并不能保证你调用的是对应的string/number/boolean的方法，所以推断参数为never
}

const result = format('hello')
console.log(result)
