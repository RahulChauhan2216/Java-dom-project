function getColor() {

    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode
}

getColor();

document.getElementById("btn").addEventListener(
    "click",getColor
)

getColor();