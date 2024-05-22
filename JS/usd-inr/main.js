function convertAmt() {
    const convertRate = 86;
    const usdAmt = Number(document.getElementById("usdAmount").value);
    const inrAmt = usdAmt * convertRate;
    const resultdiv = document.getElementById("result");
    resultdiv.innerHTML = inrAmt + " INR";
}