var left;
var imageWidth;
var currentImage = 0;
var imageNumber;
var slider;
var timer;
var prevButton;
var nextButton;
var dots;

var configuration = {
    showControll: true,
    showDots: true,
    auto: true,
    error: function(){alert("Function Init doesn't work properly. Please choose at least one configuration parameter.");}
};

function init() {

    slider = document.getElementById("image_slider");
    var slidesLi = slider.children;
    imageNumber = slidesLi.length;
    imageWidth = slidesLi[0].children[0].clientWidth;

    slider.style.width = parseInt(imageWidth * imageNumber) + "px";
    var sliderBox = slider.parentNode;
    sliderBox.style.height = parseInt(slidesLi[0].children[0].clientHeight) + "px";
    sliderBox.style.width = imageWidth + "px";

    if(configuration.showDots || configuration.showControll || configuration.auto) {

        if (configuration.showDots) {

            var pages = document.getElementById("pages");
            for (i = 0; i < imageNumber; i++) {
                var liPage = document.createElement("li");
                liPage.className = "page";
                liPage.id = i;
                pages.appendChild(liPage);
            };

            dots = pages.children;
            for(i = 0; i < imageNumber; i++){
                dots[i].onclick = function () { dotsClick(event); };
            };


            if (configuration.auto) {
                sliderBox.onmouseover = mouseOver;
                sliderBox.onmouseout = mouseOut;
            };
        };

        if (configuration.showControll) {

            prevButton = document.getElementById("prev");
            nextButton = document.getElementById("next");

            prevButton.onclick = function () {
                prevButtonClick();
            };
            nextButton.onclick = function () {
                nextButtonClick();
            };

            if (configuration.auto) {
                sliderBox.onmouseover = mouseOver;
                sliderBox.onmouseout = mouseOut;
            };
        };

        if (configuration.auto) {
            timer = setInterval(autoSlider, 3000);
        };

    }else{
        configuration.error();
    };
}


function dotsClick(event){
    changeDotsColor("#ffffff");
    var page = event.target;
    currentImage = page.id;
    left = currentImage * imageWidth * (-1);
    slider.style.left = left + "px";
    changeDotsColor("#333333");
}
function mouseOut(){
    timer = setInterval(autoSlider, 3000);
}
function mouseOver(){
    clearInterval(timer);
}
function nextButtonClick(){
    if(configuration.showDots){
        changeDotsColor("#ffffff");
    };
    if (currentImage < imageNumber-1){
        currentImage++;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";
        if(configuration.showDots){
            changeDotsColor("#333333");
        };
    }else if(currentImage == imageNumber-1) {
        left = 0;
        slider.style.left = left + "px";
        currentImage = 0;
        if(configuration.showDots){
            changeDotsColor("#333333");
        };
    };
}
function prevButtonClick(){
    if(configuration.showDots){
        changeDotsColor("#ffffff");
    };
    if(currentImage == 0){
        currentImage = imageNumber-1;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";
        if(configuration.showDots){
            changeDotsColor("#333333");
        };

    }else{
        currentImage--;
        left = currentImage * imageWidth * (-1);
        slider.style.left = left + "px";
        if(configuration.showDots){
            changeDotsColor("#333333");
        };
    };
}

function autoSlider() {
    if(configuration.showDots){
        changeDotsColor("#ffffff");
    };
    if(currentImage < imageNumber-1) {
        currentImage++;
        left = (currentImage) * imageWidth * (-1);
        slider.style.left = left + "px";
        if(configuration.showDots){
            changeDotsColor("#333333");
        };
    }else if(currentImage == imageNumber-1){
        left = 0;
        slider.style.left = left + "px";
        currentImage = 0;
        if(configuration.showDots){
            changeDotsColor("#333333");
        };
    };

}
function changeDotsColor(color){
    var dot = dots[currentImage];
    dot.style.backgroundColor = color;
}

window.onload = init;