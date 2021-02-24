// 对象类型
const person: {
	name: string,
	age: number
} = {
	name: 'aaa',
	age: 18
}

// 数组类型
const persons: string [] = ['122', '123d']

// 类类型
class Person {}
const lisa: Person = new Person()

// 函数类型
const child: () => string = () => { return '小孩儿' }

function forever(): never {
	// while(1) {}
    throw new Error();
    console.log(1111);
}

forever()

