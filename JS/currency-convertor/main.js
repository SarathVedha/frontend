const currencyList = document.querySelectorAll(".currency");
const input = document.getElementById("input");
const result = document.getElementById("result");
const submit = document.getElementById("btn");
const error = document.getElementById("error");

const apiURL = "https://api.frankfurter.app";

fetch(`${apiURL}/currencies`) // this will onload
.then((response) => response.json()).then((response) => {
    console.log(response);
    Object.keys(response).forEach((currency) => { // getting all json keys as values

        console.log(currency);
        currencyList.forEach((dropDowns) => {

            let options = document.createElement("option");
            options.value = currency;
            options.textContent = currency;

            console.log(options);

            dropDowns.appendChild(options);
        })
        
    })
})
.catch((error) => console.log("Error: ", error));


submit.addEventListener("click",() => {

    let selectedCcy1 = currencyList[0].value;
    let selectedCcY2 = currencyList[1].value;
    let amount = input.value;

    console.log("selectedCcy1: ", selectedCcy1);
    console.log("selectedCcY2: ", selectedCcY2);
    console.log("amount: ", amount);

    if (selectedCcy1 == selectedCcY2) {
        
        error.innerHTML = `Both Currency should not be same`;
    } else {
        
        if (amount == 0 || isNaN(amount) || amount === '') {
            
            error.innerHTML = `Amount should not be empty`
        } else {
            
            fetch(`${apiURL}/latest?from=${selectedCcy1}&to=${selectedCcY2}&amount=${amount}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                let exchangeValue = Object.values(response.rates);
                console.log("exchangeValue: ", exchangeValue);

                result.value = exchangeValue;
            })
            .catch((error) => console.log("Error: ", error));
        }
    }

})

