// creating result div in js at startup at one time
let resultDiv = document.createElement("div");
resultDiv.id = "result";
document.getElementById("wrapper").appendChild(resultDiv);

// button
const selectedCity = document.querySelector("button");

// button click event
selectedCity.addEventListener("click", () => {
    
    console.log("Clicked!!");
    const input = document.querySelector("select");
    const selectedIndex = input.selectedIndex;
    console.log("selectedIndex: ", selectedIndex);
    const selectedCity = input.options[selectedIndex].value;
    console.log("selectedCity: ", selectedCity);
    let population = 0; let literarcyRate = 0; let language = "English";

    switch (selectedCity.toUpperCase()) {
        case "CHENNAI":
            population = 80
            literarcyRate = 90
            language = `Tamil, English`
            break;
        case "MUMBAI":
            population = 90
            literarcyRate = 90
            language = `Hindhi, English`
            break;
        case "DELHI":
            population = 70
            literarcyRate = 80
            language = `Hindhi, English`
            break;
        default:
            console.log("In Default")
            break;
    }

    let status = `The Indian city of ${selectedCity} has a population of ${population}%. Language spoken is ${language} and literacy rate is ${literarcyRate}%.`;
    console.log("status: ", status);

    document.getElementById("result").innerHTML = status;
});