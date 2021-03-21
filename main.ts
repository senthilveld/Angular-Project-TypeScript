export {}
let message = "TypeScript Basics";
console.log(message);

let x =10;
const y = 20;


let sum;
const title = "const declaration";


let isBeginner : boolean = true;
let total : number = 0;
let names : string ="vishwas";
let sentences : string = `My name is ${names}.
I am a beginner to in TypeScript`;

console.log(sentences);

let n: null = null;
let u: undefined = undefined;

let isNew : boolean = null;
let myName : string = undefined;

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] =['chris',1];


// let abc: any = 10;
// abc();
// abc.toUpperCase();


// let mn: unknown = 10;
// (mn as string).toUpperCase();


let a;
a = 10;
a = true;

let b= 20;


let multiType : number | boolean ;
multiType = 20;
multiType = true;
console.log(multiType,"union");

let anyType : any;
anyType = 20;
anyType = true;
console.log(multiType,"any")

function add(num:number,num1:number){
    return num + num1
}

let ad:number = add(1,1)
console.log(ad, "function");



function add1(num:number,num1?:number){
    return num + num1
}

let ad1:number = add1(1)



function add2(num:number,num1:number=10){
    return num + num1
}

let ad2:number = add2(1)
console.log(ad2, "defaultParameter");



function add3(num:number,num1:number=10){
    return num + num1
}

let ad4:number = add3(1,12)
console.log(ad4, "defaultParameterCheck");

console.log("1"+"2","string");
console.log(1+1,"number");

console.log(2+"2","string");
console.log("2"+2,"string");

console.log(2+2+"2","string1");
console.log(2+"2"+2,"string2");



function Obj(person:{firstName:string,lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`)
}


let capture  = {firstName:"sundar",lastName:"srini"}

Obj(capture);



interface Person{
    firstName:string,
    lastName:string
}

function Obj1(person:Person){
    console.log(`${person.firstName} ${person.lastName}`)
}


let capture1  = {firstName:"sundar",lastName:"srini"}

Obj1(capture1);


class Employee {
  employeeName:string;
   constructor(name:string){
       this.employeeName = name;
   }

   greet(){
       console.log(`Good Morning ${this.employeeName}`)
   }
}

let EmpCheck = new Employee('vishwas');
console.log(EmpCheck.employeeName);


EmpCheck.greet();


class Manager extends Employee {
    constructor(manage:string){
        super(manage);
    }

    delegate(){
        console.log('delegate')
    }
}

let manages = new Manager('Hell');
manages.delegate();
manages.greet();
console.log(manages.employeeName);










