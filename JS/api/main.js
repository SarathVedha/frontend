//api

// let URLS = "https://official-joke-api.appspot.com/"; // free url max request is there
let URLS = "https://www.frankfurter.app/"; // free url unlimited

// fetch always get
fetch(`${URLS}currencies`).then((res) => console.log("Plain Response: ", res)).catch((error) => console.log(error));
fetch(`${URLS}currencies`).then((res) => console.log("Ok: ", res.ok)).catch((error) => console.log(error));
fetch(`${URLS}currencies`).then((res) => console.log("Status: ", res.status)).catch((error) => console.log(error));
fetch(`${URLS}currencies`).then((res) => {
    console.log("Headers...");
    res.headers.forEach((val, key) => {
        console.log("Key: ", key, " Val: ", val);
    })
}).catch((error) => console.log(error));


fetch(`${URLS}currencies`).then((res) => console.log("Converting To Json: ", res.json())).catch((error) => console.log(error));
fetch(`${URLS}currencies`).then((res) => res.json()).then((respose) => console.log("Converted To Json: ", respose)).catch((error) => console.log(error));

// api validating
fetch(`${URLS}currencies`).then(res => {
    if(res.ok) {

        return res.json();
    }else{

        return res;
    }
}).then(respose => {
    console.log("Success: ", respose);
    console.log("response: ", respose.AUD);// know the reponse directly get
    console.log("objectKeys", Object.keys(respose));
    console.log("objectValues", Object.values(respose));
    console.log("objectEntries", Object.entries(respose));
}).catch((error) => {
    console.log("Failure: ", error);
});

URLS = "https://jsonplaceholder.typicode.com/"

fetch(`${URLS}todos/1`).then(response => response.json())
.then(json => console.log("get Todos", json))
.catch((error) => console.log("error: ", error));

//post
fetch(`${URLS}todos`, {
method: "POST",
headers: {
    "content-type": "application/json"
},
body: JSON.stringify({
    name: "Vedha",
    age: 23,
    location: "TRT"
})
})
.then(response => response.json())
.then(json => console.log("post Todos", json))
.catch((error) => console.log("error: ", error));
