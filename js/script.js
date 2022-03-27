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

function showbigFunc(){
    let navsmall=document.querySelector(".small-nav");
    let navbig=document.querySelector(".big-nav");
    let navMobileSmall=document.querySelector(".small-mobile-nav");
    let navMobileBig=document.querySelector(".big-mobile-nav");
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
// let nav=document.querySelector("#small-nav");
nav.className="big-nav";
