// 类
// 需要运行在es5或以上版本  tsc 类.ts -t es6
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello' + this.greeting;
    }
}
let greeter = new Greeter('world');
// 继承
class Animal {
    constructor(theName) { this.name = theName; }
    ;
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) { super(name); }
    ;
    move(distanceInMeters = 45) {
        console.log(`Galloping...`);
        super.move(distanceInMeters);
    }
}
let sam = new Snake(`Sammy the Python`);
let tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(35);
// 共有、私有
// 当成员被标记为private时，就不能在它声明它的类的外部访问
// protected在派生类中可以访问
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误  我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的
// readonly 只读属性必须在声明时或构造函数里被初始化
// 存取器  编译器设置为es5或更高
let passcode = 'secret passcode';
class Employees {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}
let employeeA = new Employees();
employeeA.fullName = 'Bob Smith';
if (employeeA.fullName) {
    console.log(employeeA.fullName);
}
// 静态属性
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类   abstract
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
class Animals {
    move() {
        console.log('roaming the earch...');
    }
}
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Department name:` + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department;
// department = new Department(); // 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 方法在声明的抽象类中不存在
// 构造函数
let GreeterDup = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    GreeterDup.prototype.greet = function () {
        return 'Hello,' + this.greeting;
    };
    return Greeter;
})();
let greeterDup;
greeterDup = new Greeter(' my ts');
console.log(greeterDup.greet());
