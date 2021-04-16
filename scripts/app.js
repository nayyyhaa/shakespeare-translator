// read input
let inputElement = document.querySelector("#inputTxt");

// button click
let translateBtnElement = document.querySelector("#translateButton");

// show output
let outputElement = document.querySelector("#outputTxt");

let url="https://api.funtranslations.com/translate/shakespeare.json";

function translatedURL(inputValue){
    var encodedURI = encodeURI(inputValue);
    let translatedURL = `${url}?text=${encodedURI}`;
    return translatedURL;   
}

function translateFunction(event){
    let inputValue = inputElement.value;    
    let finalURL = translatedURL(inputValue);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputElement.innerText = json.contents.translated;
        })
        .catch(() => alert("Shakespeare(Server) is busy! Try after sometime"))
}
translateBtnElement.addEventListener("click", translateFunction);