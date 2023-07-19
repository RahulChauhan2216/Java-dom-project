let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let symbolSet = "~!@#$%^&*()_+><?,./";

let passBox = document.getElementById('pass-box');
let totalChar = document.getElementById('total-char');
let upperInput = document.getElementById('upper-case');
let lowerInput = document.getElementById('lower-case');
let numberInput = document.getElementById('number');
let symbolInput = document.getElementById('symbol');

let getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

let passwordgenerate = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < totalChar.value) {
        return passwordgenerate(password);
    }
    passBox.innerText = trunn(password, totalChar.value);
}

document.getElementById("btn").addEventListener(
    "click",
    function () {
        passwordgenerate();
    }
)


function trunn(str, num) {
    if (str.length > num) {
        let subStr = ""
        for (let i = 0; i < num; i++) {
            subStr += str[i];
        }
        return subStr
    }
    else {
        return str;
    }
}