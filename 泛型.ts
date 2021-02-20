function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>('string');
let outputO = identity('string') // 通用


// 1、泛型类型
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
let myIndentity: <T>(arg: T) => T = identity;

// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对于上就可以
let myIndentityO: <U>(arg: U) => U = identity;


//  作为接口

function identityFn<T>(arg: T): T {
	return arg;
}

interface GenericIdentityFn {
	<T>(arg: T): T;
}


let myIndentity1: GenericIdentityFn = identityFn

interface GenericIdentityFnO<T> {
	(arg: T): T
}

let myIndentity2:GenericIdentityFnO<number> = identity;


// 2、泛型类
class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y };

// 类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

// 泛型约束
interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}

// 我们需要传入符合约束类型的值，必须包含必须的属性
loggingIdentity({ length: 10, value: 3 });

// 在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
	return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


// 在ts使用泛型创建工厂函数时，需要引用构造函数的类类型
function create<T>(c: {new(): T; }): T {
	return new c()
}



class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!