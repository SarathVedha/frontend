// console log
console.log("Hello World");

// variable
let value = 0;
console.info(value);
// dynamically typed language like python no need to determine int or String like java
value = 10;
console.info("Value is: " + value);

value = "Vedha"
console.info("Value is: " + value);

// typecheck
console.log("type of value: " + (typeof(value)));

let emptyVal;
console.log("emptyVal: " + emptyVal);

// Constant Variable after initialize we can't modify it like in java static final field
const piValue = 3.14;
console.info("piValue is: " + piValue);

// can't modify will throw error on console (Uncaught TypeError: Assignment to constant variable.)
// piValue = 20;
// console.info("piValue is: " + piValue);

// same as let but var is old one
var value2 = 2;
console.info("value2 is: " + value2);

value2 = 5;
console.info("value2 is: " + value2);

var emptyVal2;
console.log("emptyVal2: " + emptyVal2);

// Operators
let a = 10;
let b = 20;
console.log("a: " + a);
console.log("b: " + b);

// Arithmetic
let c = a + b;
console.log("add: " + c);
console.log("sub: " + a-b); // NaN will give not a number
console.log("sub: " + (a-b));
console.log("mutl: " + (a*b));
console.log("div: " + (a/b));
console.log("div remainder: " + (a%b));
console.log("before preIncrement: " + a);
console.log("preIncrement: " + ++a);
console.log("postIncrement: " + a++);
console.log("after postIncrement: " + a);

console.log("before preDecrement: " + b);
console.log("preDecrement: " + --b);
console.log("postDecrement: " + b++);
console.log("after postDecrement: " + b);

// c = c + 3;
console.log("+= assignment: " + (c+=3));

// Assignment
// == compare contents if another type like string with int it will convert it into int vise-versa
console.log("isEqual: " + (a==b));
console.log("diff type isEqual: " + ('10' == 10)); 
console.log("diff type isEqual: " + ('aa' == 10)); 
console.log("notEqual: " + (10!=11));
console.log("diff type notEqual: " + ('10'!=11));

// === strict contents check, different type but same value also will return false
console.log("=== isEqual: " + (5 === 5));
console.log("=== isEquals: " + ('5' === 5));
console.log("!== notEqual: " + (11!==10));
console.log("!== notEqual: " + ('10'!=11));

console.log("greaterThan: " + (10 > 21))
console.log("type diff greaterThan: " + ('30' > 21))
console.log("type diff greaterThanEqual: " + ('21' >= 21))

console.log("smallerThan: " + (10 < 21))
console.log("type diff smallerThan: " + ('30' < 21))
console.log("type diff greaterThanEqual: " + ('21' <= 21))

// Logical
console.log("and: " + (10>5 && 20>=20));
console.log("and: " + (10>5 && 12>=20));

console.log("or: " + (10>5 || 20>=20));
console.log("or: " + (10>5 || 12>=20));
console.log("or: " + (1>5 || 15>=20));

// prompt to get a user value as string
// let age = prompt("what is your age!!");
// console.log("user Age: " , age)

// always string
// let tickets = prompt("How Many tickets you wants!!");
// console.log("typeOf tickets: ", typeof(tickets));

// alert("Amount Shoud be pay for tickets are: " + tickets*100);

// type convert string to numer for safer side
// let summa = prompt("Enter a number");
// console.log("number is: ", summa+10); // wrong answer will come because or string

// convert string to number
// console.log("final number: " , Number(summa)+10);

// DOM(Document Object Model) accessing html tags and elements in js
let h1Input = document.getElementById("message");
console.log("h1Input: ", h1Input);

h1Input.innerHTML="Welcome Vedha";

// Math Object
let max = Math.max(2, 8, 4, 0);
console.log("max: " , max);

let min = Math.min(2, 8, 4, 0);
console.log("min: " , min);

let round = Math.round(5.8);
console.log("round: " , round);

let floor = Math.floor(5.6);
console.log("floor: " , floor);

let pi = Math.PI;
console.log("pi: " , pi);

let random = Math.random();
console.log("random: " , random);

// String Object
let str1 = "Hi Vedha ";
console.log("str1: " , str1);

let str1Length = str1.length;
console.log("str1Length: " , str1Length);

let str2 = ", TRT";
console.log(str1.concat(str2));

// substring
console.log(str1.slice(3));
console.log(str2.slice(2, str2.length));

// in js we can substring a string from negative index
console.log(str1.slice(-6));

// same as slice
console.log(str1.substring(0, 2));

// subStr in js will do (0, 10) it will give from 0 and next 10 chars
console.log(str2.substr(2, 3));

// split
console.log(str1.concat(str2).split(','));

console.log(str1.charAt(0));
console.log(str1.charCodeAt(0)); // ascii code for char
console.log(str1.slice(3, str1.length).toUpperCase());
console.log(str1.slice(3, str1.length).toLowerCase());

console.log(str1.startsWith("H"));
console.log(str1.startsWith("S"));

console.log(str2.endsWith("T"));
console.log(str2.endsWith("S"));

console.log(str1.trim());

let str3 = "100";
console.log(str3.padEnd(5, 0));
console.log(str3.padStart(5, 0));

// Template literales is using `` this symbol avalibale in down of esc key
// usage-> mutiple line string and add ' and "" quotes in string and add varibale in between by using ${var_name}
let fullName = "Vedha"
let locations = "Tiruttani";

let message = `${fullName} lives in ${locations}`;
console.log("message: " , message);

let dobuleLine = `Summa
da ${fullName}`;
console.log("dobuleLine: " , dobuleLine);

let mutipleQuotes = `"Vedha" is a 'Rocker'`;
console.log("mutipleQuotes: " , mutipleQuotes);

let mutipleQuotesWithVar = `"${fullName}" in '${locations}'`;
console.log("mutipleQuotesWithVar: " , mutipleQuotesWithVar);

//Arrays
let locationArray = ["TRT", "AKM", "MAS"];
console.log("locationArray: ", locationArray);
console.log("locationArray Length: ", locationArray.length);

console.log("locationArray[0]: ", locationArray[0]);

console.log("locationArray[arr.length-1]: ", locationArray[locationArray.length-1]);

console.log("locationArray[8]: ", locationArray[8]); // undefined

let multiTypeArray = [12, "Vedha", 12.0, ["Vedha1", 12.1]]
console.log("multiTypeArray: " , multiTypeArray);

console.log("multiTypeArray[0]: ", multiTypeArray[0]);

console.log("multiTypeArray[arr.length-1]: ", multiTypeArray[multiTypeArray.length-1]);

console.log("multiTypeArray[arr.length-1][1]: ", multiTypeArray[multiTypeArray.length-1][1]);

// if single parameter it will take value without paranthesis
multiTypeArray.forEach(value => console.log(value));

// foreach 1 is value and 2 is index and 3 is full array need to add paranthesis
multiTypeArray.forEach((value, index) => console.log(index, value));

// foreach 1 is value and 2 is index and 3 is full array need to add paranthesis
multiTypeArray.forEach((value, index, array) => console.log(index, value, " in: ", array));

// Matrix array
let matrixArray = [["vedha", "sarath"], ["vijay", "sethu"]];
console.log("matrixArray: ", matrixArray);
console.log("matrixArray[0]: ", matrixArray[0]);
console.log("matrixArray[0][1]: ", matrixArray[0][1]);
console.log("matrixArray[0][matrixArray[0].length-1]: ", matrixArray[0][matrixArray[0].length-1]);

//Array Methods
let arr = ['a', 'b', 'c'];

console.log("Array: " , arr);
console.log("Array Length: " , arr.length);

// push add value at end of the array and return the length of array
console.log("Array Push: ", arr.push('d'));
console.log("Array: ", arr);

// pop remove value at end of the array and return the removed value
console.log("Array pop: ", arr.pop());
console.log("Array: ", arr);

// shift removes the fist value and rearrange the array return the removed value
console.log("Array shift: ", arr.shift());
console.log("Array: ", arr);

// unShift add value ar first and returns the length of array
console.log("Array unShift: ", arr.unshift('a'));
console.log("Array: ", arr);

// splice 
// 1st starting index
// 2nd no of elements to be deleted from starting index eg (1 means delete one value) (0 means means no value to delete)
// 3nd values to be insert from starting index
arr.push('d', 'e', 'f');
console.log("Array splice: ", arr.splice(1,1)) // 1 from index, 1 delete count
console.log(arr);

console.log("Array splice: ", arr.splice(2,2)) // 4 from index, 2 delete count
console.log(arr);

console.log("Array splice: ", arr.splice(1, 1, 'b')); // replace, delete value at 1 index and add b in that index
console.log(arr);

console.log("Array splice: ", arr.splice(2, 2, 'c', 'f')) // 2 index, 2 delete count and insert 2(c, d) values
console.log(arr);

console.log("Array splice: ", arr.splice(3, 0, 'd', 'e')) // insert, at 3 index and delete no values and insert (d, e)
console.log(arr);

// slice like substring
// slice 1st value starting index and 2nd value endind index

console.log("Array slice: ", arr.slice(0, 3));

// reverse its reverse the original array
console.log("Array reverse: ", arr.reverse());

// converts array to string with value seperated by ,
let arrString = arr.join();
console.log("Array join: ", arrString);

// back to original state
console.log("from to array and reversed to original: ", arrString.split(",").reverse());

// concat two array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let joined = [arr1, arr2];

// two ele as two arrays
console.log("concat: ", joined);

console.log("Array Concat: ", arr1.concat(arr2));

console.log(typeof(arr1));

// conditional if-else

const voterName = "Vedha";
const age = 20;
const city = "MAS";

if (age > 18 && city === "TRT") {
    
    console.log(`Eligiable for vote: ${voterName}`);
}else if(city === "MAS") {

    console.log(`Not Eligiable for vote in: ${city}`);
} else {
    
    console.log(`Not Eligiable for vote: ${voterName}`);
}

const switchValue = "chennai";
switch (switchValue.toUpperCase()) {
    case "CHENNAI":
        console.log("Inside CHENNAI");
        break;
    case "MUMBAI":
        console.log("Inside MUMBAI");
        break;
    case "DELHI":
        console.log("Inside DELHI");
        break;
    default:
        console.log("Inside Default")
        break;
}

// Objects

let vedha = {
    name: "Vedha", // property like fields
    location: "TRT",
    age: 21,
    subjects: ["Python", "Java"]
};
console.log("vedha: ", vedha);
console.log(vedha.location);

// another ways
let vijay = new Object();
vijay.name = "Vijay";
vijay.location = "MAS";
vijay.age = "45";
vijay.subjects= ["C++", "C"]
console.log("vijay: ", vijay);
console.log(vijay.subjects);

// objects with fields and methods

let user = {
    name: "Admin",
    active: true,
    roles: ["admin", "authorize"],
    details: {

        name: "Vedha",
        age: 21,
        location: "TRT"
    },
    isActive: function () {
        
        console.log(this.active);
    },
    getDetails: function () {
        
        return this.details;
    },
    checkRole: function (role) {
        return this.roles.indexOf(role) >= 0;
    },
    getLocation () { // optinum
        return this.details.location;
    },
    addRoles (role) {
        this.roles.push(role);
        return this.roles;
    }
}

console.log("user: ", user);
console.log(user.details);

// method invoke
user.isActive();

let details = user.getDetails();
console.log("details: ", details);

let checkRoleAuth = user.checkRole("authorize");
console.log("checkRoleAuth: ", checkRoleAuth);

let checkRoleSumma = user.checkRole("summa");
console.log("checkRoleSumma: ", checkRoleSumma);

console.log(user.getLocation());

console.log(user.addRoles("viewer"));

console.log(typeof(user));

// loops
for (let i = 0; i < 5; i++) {
    
    console.log("Loop: ", i);
}

for (let i = 0; i < 5; i++) {
    
    if (i == 3) {
        break; //break the loop
    }
    console.log("Loop2: ", i);
}

for (let i = 0; i < 5; i++) {
    
    if (i == 3) {
       continue; // skip the current iteration Loop3 :3 will not be printed
    }
    console.log("Loop3: ", i);
}

let i = 10;
while(i >= 0) {

    console.log("while: ", i);
    i--;
}

let j = 10;
do {
    
    console.log("Do-While: ", j);
    j--;
} while (j >= 0);

// for of -> array
let forArr = ["mouse", "cpu", "ram"]
for (const iterator of forArr) {
    
    console.log(iterator.toUpperCase());
}

let forUser = {
    name: "Admin",
    active: true,
    roles: ["admin", "authorize"],
    details: {

        name: "Vedha",
        age: 21,
        location: "TRT"
    },
    isActive: function () {
        
        console.log(this.active);
    }
}

// for in -> object
for (const key in forUser) {
    
    const elementValue = forUser[key];
    console.log(key, ": ", elementValue);
}

let forEachArr = ["Theri", "Master", "Leo"];
forEachArr.forEach(element => { // use can use it as forEach((value, index, array) => {})
    
    console.log(element);
});

// Functions

console.log(isPositive(8));
function isPositive(params) {
    
    return params > 0;
}
console.log(isPositive(10));
console.log(isPositive(-10));

console.log(isPositive);
console.log(typeof isPositive);

function greetings(params = "there") { //default value for param
    
    return `Hi, ${params}`;
}

console.log(greetings("Vedha"));
console.log(greetings());

function factorial(params) {
    
    if(params == 1) {
        return 1;
    }

    return params*factorial(params-1);
}

console.log(factorial(5));

let isEven = (params) => {

    return params%2 == 0;
}

console.log(isEven(2));
console.log(isEven);

// arrow functions
let add = (a, b) => {return a+b};
let sub = (a, b) => a-b;
let print = msg => console.log(msg);

console.log(add(1,4));
console.log(sub(1,4));
print("Hello Da");

let mul = (...arg) => {
    console.log(arg);
    let result = 1;
    for (const value of arg) {
        result *= value;
    }
    return result;
}
console.log(mul(2, 4, 5));

// forEach Method
let forEachArray = ["Vedha", "Vijay", "Sethu"];

forEachArray.forEach((val) => console.log(val));

forEachArray.forEach((val, index) => console.log(index, val.toUpperCase()));

forEachArray.forEach((val, index, arr) => {
    console.log(index, val.toUpperCase());
    arr[index] = val.toUpperCase();
});

console.log("forEachArray: ", forEachArray);

let forEachCity = ["TRT", "AKM", "MAS"]
forEachCity.forEach(val => { // setting dropdown

    let opt = document.createElement("option");
    opt.textContent = val;
    opt.value = val;

    document.getElementById("city").appendChild(opt);
});

// map method -> Executes each value and return new array
let usdAmts = [1, 2, 5, 20];
console.log("usdAmts: ", usdAmts);

let inrAmts = usdAmts.map((amt) => {

    return amt * 83;
});
console.log("inrAmts: ", inrAmts);

let usersArray = [// array of objects
    {name: "Vedha", age: "15"},
    {name: "vijay", age: "41"},
    {name: "Sethu", age: "42"}
];
console.log("usersArray: ", usersArray);

// get users age as seperate array
let usersArrayAge = usersArray.map(user => user.age);
console.log("usersArrayAge: ", usersArrayAge);

// filter method -> Executes each value with conditions and returns new array
let usersAgeAbove18 = usersArray.filter(user => user.age > 18);

console.log("usersAgeAbove18: ", usersAgeAbove18);

// reduce method => executes and each value and return a single value
let sumOfAges = usersArray.map(user => Number(user.age)).reduce((prev, curntVal) => prev+curntVal);
console.log("sumOfAges: ", sumOfAges);

// flat
let multiArray = [ // multi Array
    ['a','b','c'],
    ['d','e','c'],
    ['a','b','c']
]

console.log("multiArray: ", multiArray);

let flatedArr = multiArray.flat(); // reduce array of array in to single array
console.log("flatedArr: ", flatedArr);

// debugger;
let counting = flatedArr.reduce((prev, current) => {
    if (prev[current]) {
        prev[current]++;
    } else {
        prev[current] = 1;
    }
    return prev;
}, {});

console.log("counting: ", counting);

// Returing Function and Closure

let globalValue = "100%" // global field
function outer(paramsOuter) {
    
    let outerValue = "Bread";
    
    function inner(paramsInner) {
        
        let innerValue = "Eating";
        console.log(`${paramsOuter} ${innerValue} ${outerValue} with ${paramsInner} ${globalValue}`);
    }

    // inner("Vedha");
    return inner;
}

let innerFunc1 = outer("Sarath");
innerFunc1("Vedha");

let innerFunc2 = outer("Vijay");
innerFunc2("Sethu");

innerFunc1("VEdha");

// SET is also object -> is unique for premitive data type not for object
let nonUniqueArray = [1, 2, 3, 2, 4, 'Vedha', "Vedha", "VeDha", "Vijay"];
console.log("nonUniqueArray: ", nonUniqueArray);

let uniqueSet = new Set(nonUniqueArray);
console.log("uniqueSet: ", uniqueSet);

let newSet = new Set();
let newObj = {name: "new"};
let newObjClone = newObj;
newSet.add(1);
newSet.add("Vedha");
newSet.add('Vedha');
newSet.add(1);
newSet.add({name: "Theri"}); // creating new object hashcode will be diff
newSet.add({name: "Theri"}); // creating new object hashcode will be diff
newSet.add(newObj); // referenceing same object hashcode
newSet.add(newObjClone); // referenceing same object hashcode
newSet.add(''); // store it empty
newSet.add(''); // already empty available
newSet.add(); // undefined
newSet.add(); // already undefined available

console.log("setObject: ", newSet);

console.log(newSet.delete("Vedha"));
console.log(newSet.has(1));
console.log(newSet.has({name: "Theri"})); //false diff obj hashcode
console.log(newSet.has(newObjClone)); //true same ref
console.log(newSet.size);
console.log(newSet.values());
console.log(newSet.clear());

//Map - Key -value pair, key wil be unique and value will be any
let newMap = new Map();
newMap.set(1, "Vedha");
newMap.set(2, "Vijay");
newMap.set(3, "Vedha");
newMap.set(1, "Sarath");

console.log("newMap: ", newMap);

console.log(newMap.get(2));
console.log(newMap.has(3));
console.log(newMap.delete(1));
console.log(newMap.size);

console.log(newMap);

console.log(newMap.keys());
console.log(newMap.values());
console.log(newMap.entries());

newMap.forEach((value, key) => console.log(`key: ${key}, Value: ${value}`));
newMap.entries().forEach(value => console.log(value));

let maps = new Map();

let strings = "sarathrockers";
// debugger;
for (let index = 0; index < strings.length; index++) {
    
    if (maps.has(strings[index])) {
        
        maps.set(strings[index], maps.get(strings[index])+1);
    } else {
        
        maps.set(strings[index], 1);
    }
    
}

console.log(maps);

