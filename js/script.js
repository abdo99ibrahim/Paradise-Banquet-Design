let span = document.querySelector(".up");
let a = document.querySelector(".toUp");

window.onscroll = function(){
    // if(this.scrollY >=300){
        
    // }
    // else{
        
    // }
    this.scrollY >=10 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });

};
a.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });

};
new WOW().init();

let navsmall=document.querySelector(".small-nav");
let navbig=document.querySelector(".big-nav");

let section=document.querySelector(".w-95");

let navMobileSmall=document.querySelector(".small-mobile-nav");
let navMobileBig=document.querySelector(".big-mobile-nav");

function showbigFunc(){
   

    section.classList.remove("w-95");
    section.classList.add("w-100");

    navsmall.classList.add("hideClass");
    navsmall.classList.remove("showClass");
    
    navbig.classList.add("showClass");
    navbig.classList.remove("hideClass");
// Mobile
    navMobileSmall.classList.add("hideClass");
    navMobileSmall.classList.remove("showClass");
    
    navMobileBig.classList.add("showClass");
    navMobileBig.classList.remove("hideClass");
    
}

function hide(){

    section.classList.add("w-95");
    section.classList.remove("w-100");

    navsmall.classList.remove("hideClass");
    navsmall.classList.add("showClass");
    
    navbig.classList.remove("showClass");
    navbig.classList.add("hideClass");

    navMobileSmall.classList.remove("hideClass");
    navMobileSmall.classList.add("showClass");
    
    navMobileBig.classList.remove("showClass");
    navMobileBig.classList.add("hideClass");
}

$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' ________ ' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true,
  });