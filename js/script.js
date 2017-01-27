var left;
var imageWidth;
var currentImage = 0;
var imageNumber;
var slider;
var timer;
var prevButton;
var nextButton;
var pages;

function init() {

    slider = document.getElementById("image_slider");
    var slidesLi = slider.children;
    imageNumber = slidesLi.length;
    imageWidth = slidesLi[0].children[0].clientWidth;

    slider.style.width = parseInt(imageWidth * imageNumber) + "px";
    sliderBox = slider.parentNode;
    sliderBox.style.height = parseInt(slidesLi[0].children[0].clientHeight) + "px";
    sliderBox.style.width = imageWidth + "px";

    pages = document.getElementById("pages");
    for (i = 0; i < imageNumber; i++) {
        var liPage = document.createElement("li");
        liPage.className = "page";
        liPage.id = i;
        pages.appendChild(liPage);
    }

    prevButton = document.getElementById("prev");
    nextButton = document.getElementById("next");

    timer = setInterval(SliderFunction, 3000);

    pages.onclick = function () { goToImage(event); };

    prevButton.onclick = function () { prevButtonClick(); };
    nextButton.onclick = function () { nextButtonClick(); };

    sliderBox.onmouseover = mouseOver;
    sliderBox.onmouseout = mouseOut;
}


function goToImage(event){
    var page = event.target;
    currentImage = page.id;
    left = currentImage * imageWidth * (-1);
    slider.style.left = left + "px";
}
function mouseOut(){
    pages.style.display = "";
    prevButton.style.display = "";
    nextButton.style.display = "";
    timer = setInterval(SliderFunction, 3000);
}
function mouseOver(){
    pages.style.display = "block";
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    clearInterval(timer);
}
function nextButtonClick(){
    if (currentImage < imageNumber-1){
        currentImage++;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";

    }else if(currentImage == imageNumber-1) {
        left = 0;
        slider.style.left = left + "px";
        currentImage = 0;
    }
}
function prevButtonClick(){
    if(currentImage == 0){
        currentImage = imageNumber-1;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";
    }else{
        currentImage--;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";
    }
}

function SliderFunction() {

    if(currentImage < imageNumber-1) {
        currentImage++;
        left = (currentImage) * imageWidth * (-1);
        slider.style.left = left + "px";
    }else if(currentImage == imageNumber-1){
        left = 0;
        slider.style.left = left + "px";
        currentImage = 0;
    }
}

window.onload = init;