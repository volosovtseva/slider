var left;
var imageWidth;
var currentImage = 0;
var imageNumber;
var slider;

function init() {

    slider = document.getElementById("image_slider");
    var slidesLi = slider.children;
    imageNumber = slidesLi.length;
    imageWidth = slidesLi[0].children[0].clientWidth;

    slider.style.width = parseInt(imageWidth * imageNumber) + "px";
    slider.parentNode.style.height = parseInt(slidesLi[0].children[0].clientHeight) + "px";
    slider.parentNode.style.width = imageWidth + "px";

    setTimeout(function () {
        SliderFunction();
    }, 3000);

    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    prevButton.onclick = function () { prevButtonClick(); };
    nextButton.onclick = function () { nextButtonClick(); };

}

function nextButtonClick(){
    if (currentImage < imageNumber-1){
        currentImage++;
        left = (currentImage) * imageWidth * (-1);
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

    setTimeout(function () {
        SliderFunction();
    }, 3000);
}

window.onload = init;