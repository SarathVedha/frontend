enum HTTP_CODE {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

console.log(HTTP_CODE);
console.log(HTTP_CODE.NOT_FOUND);

interface ResponseData{
    result: HTTP_CODE,
    message: string;
}

function request() : ResponseData {
    
    return {result: HTTP_CODE.CREATED, message: "Created Successfully"};
}
console.log(request());

// Type Assertions
let message : any = "new message";

let strMessage : string = message as string;
console.log(strMessage);

let messageLength : number = (message as string).length;
console.log(messageLength);

let audi = `{"name" : "A6", "price":"5000000"}`;
console.log(audi);

let audiObj = JSON.parse(audi);
console.log(audiObj);

type car = {name: string; price: number}
let audiCar = audiObj as car;
console.log(audiCar);

// type guard
type dataType = string | number;

function process(data: dataType) : dataType{

    if (typeof(data) === "string") {
        
        return parseInt(data);
    } else {
        
        return data.toString();
    }
}

console.log(process("12"));
console.log(process(12));