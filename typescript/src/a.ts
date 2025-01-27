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



illegal(user1);