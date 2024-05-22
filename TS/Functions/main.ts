// Named Functions
function welcome(greet : string) : void {
    
    console.log(`Greetings: ${greet}`);
}
welcome("Hello TypeScript");

function add(x : number, y : number) : number {
    
    return x + y;
}
console.log(add(10, 20));

// Arrow function
const logger = (message : string) : void => console.log(`${message}`);
logger("Hi Vedha");

const sub = (x: number, y: number) : number  => x - y;
console.log(sub(5, 5));

// Anonymous func
const mul = function (x: number, y: number) : number {
    
    return x * y;
}
console.log(mul(2, 2));

// union type func
const chatBot = (input : string | number) : void | string => {

    if (typeof input === "number") {
        
        console.log(`You given number: ${input}`);

    } else {
        
        console.log(`You given string: ${input}`);
        return `You given string: ${input}`;
    }
}
console.log(chatBot("Hello"));
console.log(chatBot(12));

//object
function voter({votername, age} : {votername: string; age: number}) : {votername: string; age: number; voting: boolean} {
    
    return {votername, age, voting: age >= 18};
}

let voterdetails : { votername: string; age: number } = {
    votername :"vedha", age: 24
};
console.log(voter(voterdetails));

