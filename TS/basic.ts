// Type String will give type safety but java script will not give and using typescript vs will suggestion for that datatype
/*
    install typescript npm i -g typescript
    tsc -v
    typescript will be compiled to js file because browsers will only read js
*/

let names : string = "Vedha"; // string variable
console.log(names);
console.log(names.concat(" Rockers"));

let age : number = 22;
console.log(age);
console.log(age.toString());

let isAdult : boolean = true;
console.log(isAdult);

isAdult = false;
console.log(isAdult);

let nullValue : null = null;
console.log(nullValue);

let undefinedValue : undefined = undefined;
console.log(undefined);

let stringArray : string[] = [ "Vijay", "Vedha", "Sethu" ];
console.log(stringArray);

let numberArray : number[] = [12, 13, 14];
console.log(numberArray);

let anyArray : any[] = [ "Vedha", 12, new Date().toLocaleDateString() ];
console.log(anyArray);

let user : {name : string; age: number, dob : Date} = {
    name : "vedha",
    age: 21,
    dob: new Date("2000-04-12")
}
console.log(user);

// or types
let surName : null | string = null; // will accept both null and string
console.log(surName);

let anyType; // no type declaration and no value initialized to the variable it will be type any
anyType = `I am any`;
console.log(anyType);

anyType = 12;
console.log(anyType);

// Type Assertions can be used for any type
let anyTypeString = (anyType as Number).toString();
console.log(anyTypeString);

let stringValue = "i am string"; // the variable initialized with value that data type will be taken
console.log(stringValue);

function log(msg : string) : void { // return void
 
    console.log(msg);
}
log("I am logged");
// log(12); // will throw error

let arrowFnc = (msg: string) : string => {

    console.log(msg);

    return `successfully logged`;
}
let summa = arrowFnc("Hello Vedha");
console.log(summa);