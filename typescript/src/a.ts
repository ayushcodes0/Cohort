const x: number = 1;
console.log(x);


function printName(firstName:string){
    console.log(firstName)
}

printName("Ayush");

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