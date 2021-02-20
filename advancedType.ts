class Person {
	constructor(public name: string) {}
}

interface Loggable {
	log():void
}

class ConsoleLogger implements Loggable {
	log() {}
}


// 交叉类型
function extend<T, U>(first: T, last: U): T & U {
	let result = <T & U>{};
	for(let id in first) {
		(<any>result)[id] = (<any>first)[id]
	}
	for(let id in last) {
		if (!result.hasOwnProperty(id)) {
			(<any>result)[id] = (<any>last)[id]
		}
	}
	return result;
}

var jim = extend(new Person('jim'), new ConsoleLogger());
var n = jim.name;
jim.log();

// 联合类型  使用竖线（|）分割每个类型
function padLeft(value: string, padding: string | number) {}

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

// 类型保护和区分类型

interface Bird {
	fly();
	layEggs();
}

interface Fish{
	swim();
	layEggs();
}

function getSmallPet():Fish | Bird {

}
// 使用类型断言
let pet = getSmallPet();
if(<Fish>pet.swim) {
	(<Fish>pet).swim();
} else {
	(<Bird>pet).fly();
}