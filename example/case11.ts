// satisfies的缺点： 无法扩展类型

const test = {} satisfies Record<string, number>
test.a = 1

const test1 = {}
test1.a = 1

const test2: Record<string, number> = {}
test2.a = 1 // is ok
