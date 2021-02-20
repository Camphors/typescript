// 反向映射  
// 不会为字符串枚举成员生成反向映射
enum Enum {
	A
}

let a = Enum.A;
let nameOfA = Enum[a];
console.log(nameOfA);


// 类型兼容性
let t = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; //ok
x = y; // error


//类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型
let a = () => ({ name: 'aaa' });
let b = () => ({ name: 'aaa', location: 'Sea' });
a = b; // ok
b = a; // error, because a() lacks a location property