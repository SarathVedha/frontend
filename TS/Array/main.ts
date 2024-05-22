let colors : string[] = [ "red", "blue", "green" ];
console.log(colors);
colors.push("yellow");
console.log(colors);

let numbers : number[] = [ 1, 2, 3 ];
console.log(numbers);

let truths : boolean[] = [ true, false ];
console.log(truths);

let data : any[] = [ "vedha", 22, new Date() ];
console.log(data);

// union
let user : (string | number)[] = [ "Vijay", 45 ];
console.log(user); 

//tuples like order of datatype
let dataOne : [string, number, boolean] = [ "Sethu", 43, true ];
console.log(dataOne);

let carbrands : string[] = [ "tata", "bmw", "ford" ];
console.log(carbrands);

carbrands.forEach((brand : string) => {
    
    console.log(brand.concat("-01"));
});

// object array
const pepsi = {
    color: "black",
    sugar: 50
}

const sprite = {
    color: "white"
}

const coke = {
    color: "brown",
    sugar: 70
}

let drinks : { color : string; sugar?: number }[] = [ pepsi, sprite, coke ];
console.log(drinks);

drinks.forEach((drink : { color: string; sugar?: number }) => {

    console.log(drink);
})



