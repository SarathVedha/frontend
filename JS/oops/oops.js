//javascript is oops language but not 100 percentage
//Expect primitive data types all are objects

import Car, { driver, millage } from './car.js';

// Object
let user = {
    name: "Vedha",
    age: "21",

    getUserDetails: function () { 
        return `Name: ${this.name} and Age: ${this.age}`;
    },

    // isvoting is function name
    isVoting () {
        
        return this.age >= 18;
    },

    isSeniorCitizen () { return this.age >=70}
}

// let user1 = {
//     name: "Vijay",
//     age: "40",

//     getUserDetails: () => `Name: ${this.name} and Age: ${this.age}`, // you can't use arrow function if modules present

//     // isvoting is function name
//     isVoting: () => this.age >= 18,

//     isSeniorCitizen: () => this.age >= 70,
// }

console.log(user.name);
console.log(user.getUserDetails());
console.log(user.isVoting());
console.log(user.isSeniorCitizen());

// console.log(user1.name);
// console.log(user1.getUserDetails());
// console.log(user1.isVoting());
// console.log(user1.isSeniorCitizen());

//class is a template of properties
class User {

    // static values
    // accessed by User.static-varibale
    static location = "TRT";
    static noOfUsers  = 0;
    static userType = "Free";

    constructor(name, age) {

        // instance variable
        this.name = name; // this.name it will automatically create that property
        this.age = age;
        User.noOfUsers++;
    }

    getUserDetails () {

        return `Name: ${this.name}, Age: ${this.age}, Location: ${User.location}`;
    }

    getName() {
        
        return `Name: ${this.name}`;
    }

    getAge() {

        return `Age: ${this.age}`;
    }

    isVoting() {

        return this.age >= 18;
    }

    isSeniorCitizen() {
        
        return this.age >= 70;
    }

    userType() {

        return `Type: ${User.userType}`;
    }

    static getTotalNoOfUsers() {

        return `Total: ${User.noOfUsers}`;
    }

}

let vedha = new User("Vedha", 21);
console.log(vedha);

console.log(vedha.name);
console.log(vedha.getUserDetails());
console.log(vedha.getName());
console.log(vedha.getAge());
console.log(User.location);
console.log(vedha.isVoting());
console.log(vedha.isSeniorCitizen());

let vijay = new User("Vijay", 40);
console.log(vijay);

console.log(vijay.name);
console.log(vedha.getUserDetails());
console.log(vijay.getName());
console.log(vijay.getAge());
console.log(User.location);
console.log(vijay.isVoting());
console.log(vijay.isSeniorCitizen());
console.log(vijay.userType());

console.log(User.noOfUsers);
console.log(User.getTotalNoOfUsers());

// extends
// base class, child class
class PaidUser extends User {

    static userType = "Paid";

    // if you are adding new fields in child class need to add super class cons
    constructor(name, age, storage) {
        super(name, age);
        this.storage = storage;
    }

    addOns() {

        return `${this.name}: Free ${this.storage} GB Storage`;
    }

    // overriding
    userType() {

        return `Type: ${PaidUser.userType}`;
    }

}

let sethu = new PaidUser("Sethu", 80 ,200);
console.log(sethu);

console.log(sethu.name);
console.log(sethu.getUserDetails());
console.log(sethu.getName());
console.log(sethu.getAge());
console.log(PaidUser.location);
console.log(sethu.isVoting());
console.log(sethu.isSeniorCitizen());
console.log(sethu.addOns());

console.log(PaidUser.noOfUsers);
console.log(PaidUser.getTotalNoOfUsers());
console.log(sethu.userType());

// get and set

class Temprature {

    constructor(temp) {

        this._temp = temp;// _temp is a private developer will know
    }

    get temp() {

        return this._temp;
    }

    set temp(temp) {

        return this._temp = temp;
    }
}

let vedhaTemp = new Temprature(25);

console.log(vedhaTemp.temp); //get
console.log(vedhaTemp.temp = 30); //set

// imported class

let tataCar = new Car("TATA");
console.log(tataCar.carDetails());
console.log(Car.carLocation());

// imported method
console.log(millage());
console.log(driver("Rockers"));
