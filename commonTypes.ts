// 布尔
let isDone: boolean = false;


//数字
let decLiteral: number = 6;
let hexLiteral: number= 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);


//字符串
let namea: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ namea }. I'll be ${ age + 1 } years old next month.`;


//数组
let listA: number[] = [1, 2, 3]
let listB: Array<number> = [1, 2, 3] // 数组泛型


// 元组Tuple
let x:[string, number];
x = ['hello', 1]; // ok
// x = [10, 'hello']; // error
console.log(x[0].substr(1)) // ello 


// 枚举
enum Color{Red=1, Green, Blue}
let c: Color = Color.Blue


// Any  
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure.ifItExists();
notSure.toFixed();
let anyList: any[] = [1, true, 'free']

let prettySure: Object = 4;
// prettySure.toFixed(); // Error:Property 'toFixed doesn't exist on type 'Object'


//Void  表示没有任何类型
function warnUser(): void {
	console.log(`This is a function without return`);
}

let unusable: void = undefined


// Null和Undefined


// Never  总是会抛出异常或根本就不会有返回值得函数表达式或箭头函数表达式的返回值类型；变量也可能是never类型，当它们被永不为真的类型保护所约束时

//返回never的函数必须存在无法达到的终点
// function error(message: string): nerver {
// 	throw new Error(message);
// }

//推断的返回值类型为never
function fail() {
	return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
	while(true) {

	}
}


// Object   非原始类型，也就是除number, string, boolean, symbol, null或undefined之外的类型
declare function create(o: object | null): void;

create({ prop: 0 }) // OK
create(null); // ok
// create(42) // error
// create('122') // error
// create(false) // error
// create(undefined) // error


// 类型断言
// ‘尖括号’语法
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length

//  另一种为as语法
let someValueA: any = 'this is a string';
let strLengthA: number = (someValue as string).length   // 在jsx中，只有as语法断言是被允许的