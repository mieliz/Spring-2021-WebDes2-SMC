// for the carousel: 
let carouselImages = ["nails1.jpeg", "nails2.jpeg", "nails3.jpeg"];
let carouselImages2 = ["pig1.jpg", "pig2.jpg", "pig3.jpg"];
let carouselImages3 = ["kawaii1.png", "kawaii2.jpg", "kawaii3.jpeg"];

let currentIndex = 2;
let carouselIMG = document.getElementById("carousel-img");

//for the select: 
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let animalOptions = ['nails', 'pig', 'icons'];
let foodOptions = ['fruits', 'vegetables', 'candy', 'grains'];
let natureOptions = ['beaches', 'forests', 'deserts'];



let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages[2];
    }
    else {
        carouselIMG.src = carouselImages[0];
    
    }
    if (currentIndex === 2) {
        currentIndex = 0;
    }

    else {
        currentIndex = currentIndex+1;
    }
}

let changeSlide2 = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages2[1];
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages2[2];
    }
    else {
        carouselIMG.src = carouselImages2[0];
    
    }
    if (currentIndex === 2) {
        currentIndex = 0;
    }

    else {
        currentIndex = currentIndex+1;
    }
}

let changeSlide3 = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages3[1];
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages3[2];
    }
    else {
        carouselIMG.src = carouselImages3[0];
    
    }
    if (currentIndex === 2) {
        currentIndex = 0;
    }

    else {
        currentIndex = currentIndex+1;
    }
}

let updateSlider = function () {
    let selectedCategory = categorySelect.value;
    if (selectedCategory === 'nails') {
        changeSlide();
    }

    if (selectedCategory === 'pig') {
        changeSlide();
    }

    if (selectedCategory === 'icons') {
        changeSlide3();
    }
}




let updateCategory = function(){
    console.log(groupSelect);
    let selectedValue = groupSelect.value;
    if (selectedValue === "animals") {
        animalOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
    else if (selectedValue === "food") {
        foodOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
    else if (selectedValue === "nature") {
        natureOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
}



window.addEventListener("load", function(){
    //triggered every 5 seconds
    setInterval(changeSlide, 5000);
})

groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", updateSlider);