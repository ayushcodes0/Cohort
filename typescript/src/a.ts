const x: number = 1;
console.log(x);

function addition(num1:number, num2:number): number{
    return num1 + num2;
}

let sum: number = addition(3,6);
console.log("Sum is : ",sum);


function runAfter1s(fn:()=>void){
    setTimeout(fn, 4000);
}

runAfter1s(function (){
    console.log("Hello Mister");
})

interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function illegal(user: User):void{
    if(user.age < 18){
        console.log("You Can't Vote");
    }
    else{
        console.log("You can Vote");
    }
}

const user1 = {
    firstName: "Ayush",
    lastName: "Singh",
    age: 18,
    email: "abc@a.com"
}


// Interfaces and Classess
// Not very usefull but good to know

interface Person{
    name: string,
    age: number,
    greet(phrase: string): void;
}

class Employee implements Person{
    name: string
    age: number

    constructor(s: string, a: number){
        this.name = s;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Ayush", 21);
console.log(e.name);


illegal(user1);

// Popular interview question is difference between type and interfaces
// Main difference between type and interfaces is interface can be use to implement classes but type can't be use to implement classes.

type user = {
    firstName: string,
    lastName: string,
    age: number
}

type congoType = string | number;

function wish(congo: congoType){
    console.log("the id is : " ,congo);
}

wish(34);
wish("Id");


// this is how you define array in typescript

interface family{
    mother: string,
    father: string,
    child: string,
    totalPerson: number
}

function filterFamily(arr: family[]){
    // All the filter logic here
}

// enum

enum Direction{
    up,
    down,
    left,
    right
}

function keyPressed(button: Direction){
    if(button == Direction.up){
        console.log("Going Up...");
    }
}


keyPressed(Direction.up);

// Generic

function identity<T>(user: T){
    console.log(user);
}

identity<string>("user1");
identity<number>(1);
identity<number>(2.22);

// Import and Export in typescript

export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

export interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}