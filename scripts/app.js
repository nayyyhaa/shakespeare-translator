// read input
let inputElement = document.querySelector("#inputTxt");

// button click
let translateBtnElement = document.querySelector("#translateButton");

// show output
let outputElement = document.querySelector("#outputTxt");

let url="https://shakespeare.p.mashape.com/shakespeare.json";

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
            outputElement.innerText = "Shakespeare says,'"+json.contents.translated+"'";
        })
        .catch(() => alert("Something wrong with the server! Try after sometime"))
}
translateBtnElement.addEventListener("click", translateFunction);