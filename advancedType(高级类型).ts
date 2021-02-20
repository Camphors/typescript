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