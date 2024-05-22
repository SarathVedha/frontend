let json = `{
    "tech" : "AWS",
    "price" : 10,
    "date"  : "${new Date().toDateString()}"
}`

let arrayJson = `[
    ${json},
    {
        "tech" : "Java",
        "price" : 20,
        "date" : "${new Date().toLocaleDateString()}"
    },
    {
        "tech" : "Java",
        "price" : 20,
        "date" : "${new Date().toJSON()}"
    }
]`

console.log(json);
console.log(arrayJson);

// parsing json string to json
console.log(JSON.parse(json));
console.log(JSON.parse(json).date);

console.log(JSON.parse(arrayJson));
console.log(JSON.parse(arrayJson)[0].tech);

// converting json to json string
console.log(JSON.stringify(JSON.parse(json)));
console.log(JSON.stringify(JSON.parse(arrayJson)));
