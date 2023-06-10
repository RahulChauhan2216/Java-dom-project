const endDate = "11 June 2023 9:52 PM"

document.getElementById("end-date").innerText = endDate;

let inputs = document.querySelectorAll("input")


function clock() {

    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now) / 1000;

    // to change diff into second-----

    console.log(end);
    console.log(now);
    console.log(diff);

    if (diff < 0) {
        return; 
    }

    // let min = sec/60;
    // console.log(min);

    // let hour = min/60;
    // console.log(hour);

    // let days = hour/24;
    // console.log(days);

    inputs[0].value = (Math.floor(diff / 3600 / 24));
    inputs[1].value = (Math.floor(diff / 3660) % 24);
    inputs[2].value = (Math.floor(diff / 60) % 60);
    inputs[3].value = (Math.floor(diff) % 60);
}

clock();

setInterval(
    () => {
        clock()
    },1000
)