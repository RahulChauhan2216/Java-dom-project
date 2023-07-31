let slide = document.querySelectorAll(".slide");
let counter = 0;

slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let slideImage = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};


let prev = () => {
  if (counter == 0) {
    counter = slide.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
};

let nex = () => {
  if (counter == slide.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};



// **************** For Auto-Pic ***********

// let auto = () => {
//     counter++
//     slideImage();
//     if (counter == slide.length) {
//         counter = 0;
//         slideImage();
//     }
// }

// setInterval(auto, 3000);