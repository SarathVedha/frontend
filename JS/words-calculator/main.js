function calculateWords() {
    
    const words = String(document.getElementById("words").value);
    console.log("words: ", words);
    const arrayOfWords = words.split(" ");
    console.log("arryOfWords: ", arrayOfWords);
    const numberOfWords = arrayOfWords.length;
    console.log("numberOfWords: ", numberOfWords);

    const result = document.getElementById("result");
    result.innerHTML = `${numberOfWords} Words`;
}