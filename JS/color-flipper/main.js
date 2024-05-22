const hexa = [0, 1, 2, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

const colorCodeTxt = document.getElementById("color");
const submitBtn = document.getElementById("btn");
const change = document.getElementById("wrap");

function generateHexaValue() {
    
    const random =  Math.floor(Math.random()*hexa.length);
    const randomHex = hexa[random];
    console.log("randomHex: ", randomHex);
    return randomHex;
}

submitBtn.addEventListener("click", () => {

    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        
        hexColor += generateHexaValue();
    }

    console.log("Random Color Code: ", hexColor);

    change.style.backgroundColor = hexColor; //changing css style
    colorCodeTxt.innerHTML = hexColor; // changing text
})