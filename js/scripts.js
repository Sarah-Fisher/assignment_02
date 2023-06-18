// constants for query selector

const id = document.getElementById('myStudentId');
const num = document.getElementById('customNumber');
const custColour = document.querySelector('.custColor');
const randColour = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');



// function to change bg color from user input and add student id
function changeCustomColor() {
    
    // Student ID appears in p tag
    id.textContent = "200498940";

    // Get the value of num
    var numValue = Number(num.value);
    //console.log(typeof(numValue));

    // Switch for background colour conditions 
    switch (true) {
        case (numValue < 0 || numValue > 100):
            document.body.style.backgroundColor = "red";
            break;
        case (numValue < 21):
            document.body.style.backgroundColor = "green";
            break;
        case (numValue < 41):
            document.body.style.backgroundColor = "blue";
            break;
        case (numValue < 61):
            document.body.style.backgroundColor = "orange";
            break;
        case (numValue < 81):
            document.body.style.backgroundColor = "purple";
            break;
        case (numValue <= 100):
            document.body.style.backgroundColor = "yellow";
            break;
    }
}

// function to change bg color from random no.

function changeRandomColor() {

    // Get a random number between 1 and 100
    var randomNum = Math.floor(Math.random() * 101);

    // Switch for background colour conditions 
    switch (true) {
        case (randomNum < 0 || randomNum > 100):
            document.body.style.backgroundColor = "red";
            break;
        case (randomNum < 21):
            document.body.style.backgroundColor = "green";
            break;
        case (randomNum < 41):
            document.body.style.backgroundColor = "blue";
            break;
        case (randomNum < 61):
            document.body.style.backgroundColor = "orange";
            break;
        case (randomNum < 81):
            document.body.style.backgroundColor = "purple";
            break;
        case (randomNum <= 100):
            document.body.style.backgroundColor = "yellow";
            break;
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 

    for (i = 1; i <= 5; i++){
        let imgOption = document.createElement("option");
        imgOption.text = `Picture ${i}`;
        imgOption.setAttribute("value", `img/img${i}.jpg`);
        imageSelect.add(imgOption);
    }(i);
}

// function to change image
function changeImage() {
    var selectedImage = imageSelect.target.getAttribute("value");
    images.setAttribute("src", selectedImage);
}

// event listeners for on click event of buttons and select

custColour.addEventListener("click", changeCustomColor);
randColour.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("select", changeImage);