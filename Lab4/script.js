'use strict';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function randomColor() {
    return `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`
}

function changeColor(e) {
    e.target.style.color = randomColor();
    e.target.style.backgroundColor = randomColor();
}

document.getElementById("sixth-element").addEventListener("click", changeColor);

document.querySelector("#seventh-element").addEventListener("click", changeColor);

document.getElementById("input").addEventListener("change", addImage);

const reader = new FileReader();
reader.addEventListener('load', loaded);


function loaded(e) {
    const image = document.createElement("img");
    image.src = reader.result;
    image.className = "img-added";
    image.style.width = "1000px";
    image.style.height = "1000px";


    const parent = document.getElementById("image-container");
    parent.appendChild(image);
}

function addImage(e) {
    const file = e.target.files[0];
    reader.readAsDataURL(file);
}


document.getElementsByClassName("actions")[1].addEventListener("click", scale);
document.getElementsByClassName("actions")[2].addEventListener("click", scale);

function scale(e) {
    const text = e.target.textContent;
    const image = document.querySelector(".img-added:last-child");
    console.log(image)
    if (text === "increase") {
        console.log("increasing")
        image.style.width = `${image.width + 100}px`;
        image.style.height = `${image.height + 100}px`;
    }
    else {
        image.style.width = `${image.width - 100}px`;
        image.style.height = `${image.height - 100}px`;
    }
}

document.getElementsByClassName("actions")[3].addEventListener("click", remove);

function remove(e) {
    const image = document.querySelector(".img-added:last-child");
    image.remove();
}