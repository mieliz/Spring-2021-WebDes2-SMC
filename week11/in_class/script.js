let carouselImages[] = {}

let changeSlide = function(){
    console.log("something");
}


window.addEventListener("load", function (){
    //triggered one after 5 sec
    setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!!!",
        "my@email.com");
    }, 5000);

    //triggered every 5 sec
    setInterval(changeSlide, 5000);
})