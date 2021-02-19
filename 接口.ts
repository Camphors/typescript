interface LabelledValue {
	label: string;
}

function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);


// option bags 模式
interface SquareConfig {
	color?: string;
	width?: number;
	readonly height?: number  //只读 只能在刚刚创建的时候修改其值
}

function createSquare(config:SquareConfig): { color: string; area: number } {
	let newSquare = {color: 'white', area: 100};
	if (config.color) {
		newSquare.color = config.color
	}
	if (config.width) {
		newSquare.area = config.width * config.width
	}
	return newSquare;
}

let mySquare = createSquare({color: 'Green'})

let mySquareOne: SquareConfig = { height: 20 } 
// mySquareOne.height = 10 // error

// ReadonlyArray<T>，与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro:ReadonlyArray<number> = a;
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 6 // error
// a = ro // error

// 可以类型断言重写
a = ro as number[];


// 额外的属性检查


// 1、函数类型

interface SearchFunc{
	(source: string, subString: string): boolean
}

//我们可以像使用其他接口一样使用这个函数类型的接口
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	let result = source.search(subString);
	return result > -1
}

console.log(mySearch);

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配

let mySearchDup: SearchFunc;
mySearchDup = function(src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > -1
}

// 2、可索引的类型(支持字符串和数字)
interface StringArray{
	[index: number]: string；
}

let myStringArr: StringArray;
myStringArr = ['hello', 'typescript'];
let myStr: string = myStringArr[0]

interface NumberDictionary{
	readonly [index: string]: number; // 只读索引类型
	length: number;
	// name: string // 错误，‘name’的类型与索引类型返回值的类型不一致
}

// 实现接口
interface ClockInterface{
	currentTime: Date;
	setTime(d: Date);
}

class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	};
	constructor(h: number, m: number) {}
}

interface ClockInterfaceDup {
	tick();
}

// 类静态部分与实例部分的区别
interface ClockConstructor {
	new (hour: number, miunte: number): ClockInterfaceDup
}


// 当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误,这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内
// class ClockCon implements ClockConstructor {
// 	currentTime: Date;
// 	constructor(h: number, m: number) {
// 		// code...
// 	}
// }

function createClock(ctor: ClockConstructor, hour: number, miunte: number):ClockInterfaceDup {
	return new ctor(hour, miunte)
}

class DigitalClock implements ClockInterfaceDup {
	constructor(h: number, m: number) {}
	tick() {
		console.log('beep beep');
	}
}

class AnalogClock implements ClockInterfaceDup {
	constructor(h: number, m: number) {
	}
	tick() {
		console.log('tick tick');
	}
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital);
console.log(analog);

// 继承接口
interface Animal{
	sound: string
}

interface Fish{
	color: string
}

interface GoldFish extends Animal, Fish {}

let goldFish = <GoldFish>{};
goldFish.color = 'gold';
goldFish.sound = 'gu gu';

// 混合类型
interface Counter {
	(start: number): string;
	interval: number;
	reset(): void
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number) {}
	counter.interval = 123;
	counter.reset = function () {};
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0


// 接口继承类

class Control {
	private state: any
}

interface SelectableControl extends Control {
	select(): void
}

class Button extends Control implements SelectableControl {
	select() {}
}
 class TextBox extends Control{
 	select() {}
 }