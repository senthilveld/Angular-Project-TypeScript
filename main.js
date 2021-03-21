"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "TypeScript Basics";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "const declaration";
var isBeginner = true;
var total = 0;
var names = "vishwas";
var sentences = "My name is " + names + ".\nI am a beginner to in TypeScript";
console.log(sentences);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 1];
// let abc: any = 10;
// abc();
// abc.toUpperCase();
// let mn: unknown = 10;
// (mn as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
console.log(multiType, "union");
var anyType;
anyType = 20;
anyType = true;
console.log(multiType, "any");
function add(num, num1) {
    return num + num1;
}
var ad = add(1, 1);
console.log(ad, "function");
function add1(num, num1) {
    return num + num1;
}
var ad1 = add1(1);
function add2(num, num1) {
    if (num1 === void 0) { num1 = 10; }
    return num + num1;
}
var ad2 = add2(1);
console.log(ad2, "defaultParameter");
function add3(num, num1) {
    if (num1 === void 0) { num1 = 10; }
    return num + num1;
}
var ad4 = add3(1, 12);
console.log(ad4, "defaultParameterCheck");
console.log("1" + "2", "string");
console.log(1 + 1, "number");
console.log(2 + "2", "string");
console.log("2" + 2, "string");
console.log(2 + 2 + "2", "string1");
console.log(2 + "2" + 2, "string2");
function Obj(person) {
    console.log(person.firstName + " " + person.lastName);
}
var capture = { firstName: "sundar", lastName: "srini" };
Obj(capture);
function Obj1(person) {
    console.log(person.firstName + " " + person.lastName);
}
var capture1 = { firstName: "sundar", lastName: "srini" };
Obj1(capture1);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var EmpCheck = new Employee('vishwas');
EmpCheck.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manage) {
        return _super.call(this, manage) || this;
    }
    Manager.prototype.delegate = function () {
        console.log('delegate');
    };
    return Manager;
}(Employee));
var manages = new Manager('Hell');
manages.delegate();
manages.greet();
console.log(manages.employeeName);
