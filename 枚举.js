// 反向映射  
// 不会为字符串枚举成员生成反向映射
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a];
console.log(nameOfA);
// 类型兼容性
var t = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; //ok
x = y; // error
//类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型
var a = function () { return ({ name: 'aaa' }); };
var b = function () { return ({ name: 'aaa', location: 'Sea' }); };
a = b; // ok
b = a; // error, because a() lacks a location property
