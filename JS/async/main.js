console.log("Async");

//setTimeout and setInterval are async method

// time out and execute after interval but down will execute
setTimeout(() => console.log("wait 4"), 4000);
setTimeout(() => console.log("wait 3"), 3000);
setTimeout(() => console.log("wait 2"), 2000);
setTimeout(() => console.log("wait 1"), 1000);
setTimeout(() => console.log("wait 0"), 0);

console.log("Bye");

// time interval will execute every 2 sec async and down will execute
setInterval(() => {
    // console.log("every 2")
}, 2000);

console.log("Bye2");

// Promise is object act as executors
let promise = new Promise((success, failure) => {

    //its an api handling it success -> then() and failure -> catch and finally always execute
    let toss = Math.floor(Math.random()*2);
    if (toss == 0) {
        
        success("Head");
    } else {
        
        failure("Tail");
    }
});

promise.then((val) => console.log(`Its ${val}`)).catch((val) => console.log(`Its ${val}`)).finally(() => console.log("finally"));

console.log("Bye3");

function promiseFunc() {

    return new Promise((success, failure) => {
        //its an api handling it success -> then() and failure -> catch and finally always execute
        let toss = Math.floor(Math.random()*2);
        if (toss == 0) {
        
            success("Head");
        } else {
        
            failure("Tail");
        }

    });
}

promiseFunc().then((val) => console.log(`Its ${val}`)).catch((val) => console.log(`Its ${val}`)).finally(() => console.log("finally2"));

console.log("Bye4");


let vedha = new Promise((success, failure) => {

    if (true) {
        
        setTimeout(success, 3000, "Vedha Reached");
    } else {

        failure("Vedha No Reached");
    }
})

let vijay = new Promise((success, failure) => {

    if (true) {
        
        setTimeout(success, 2000, "Vijay Reached");
    } else {

        failure("Vijay No Reached");
    }
})

let sethu = new Promise((success, failure) => {

    if (false) {
        
        setTimeout(success, 1000, "Sethu Reached");
    } else {

        failure("Sethu No Reached");
    }
})

// wait for all promise to complete and all success means will return all value but if any one fails it will return that failure
Promise.all([vedha, vijay, sethu]).then((message) => console.log(message)).catch((message) => console.log(message)).finally(() => console.log("finally3"))

// wait for all to complete success or failure
Promise.allSettled([vedha, vijay, sethu]).then((message) => console.log(message)).catch((message) => console.log(message)).finally(() => console.log("finally4"))

// async keyword in func return promise object
async function asyncFunc() {
    
    return "Hello ASYNC"; // will return promise
}

console.log(asyncFunc());
asyncFunc().then((msg) => console.log(msg)).catch((message) => console.log(message)).finally(console.log("finally5"));

let awaitPromise = new Promise((success, failure) => {

    if(false) {

        setTimeout(success, 5000, "Rabin Reached");
    }else {

        failure("Rabin Not Reached");
    }
})

// async with await

async function asyncAwaitFunc() {

    console.log("Inside asyncAwaitFunc");
    try {
        
        res = await awaitPromise;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    console.log("End asyncAwaitFunc");
}

asyncAwaitFunc();
