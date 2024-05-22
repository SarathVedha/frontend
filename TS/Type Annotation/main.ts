let username : string = "Vedha";
console.log(username);

const username2= "Vijay"; // not required because const not modified but we can give
const age2: number = 12;

let age : number = 22;
console.log(age);

let isVote: boolean = age >= 18;
console.log(isVote);

let currentDate : Date = new Date();
console.log(currentDate);
console.log(currentDate.toLocaleDateString());

// Any
let unknown : any = "Hello";
console.log(unknown);
unknown = 12;
console.log(unknown);

let nothingmuch : null = null;
console.log(nothingmuch);

let nothing : undefined = undefined;
console.log(nothing);

// Type Inference
let clgName = "Anna University"; // automatic to string because string value init
console.log(clgName);

let bankbal = 200;
console.log(bankbal);

let isActive = bankbal > 50;
console.log(isActive);


//Union Type
let amt : number | string = 100;
console.log(amt);
amt = "200";
console.log(amt);

//Literal Value Type
let color : "red" | "blue" | "green";
color = "green";
console.log(color);

let weekday : "mon" | "tue" | "wed" | "thr" | "fri";
weekday = "fri";
console.log(weekday);

//Object
let car : { model: string; topspeed: number; price: number } = {
    model: "TATA",
    topspeed: 200,
    price: 120000.00
}
console.log(car);

// destruct

let {model, price}: {model: string; price: number} = car;
console.log(model, price);
