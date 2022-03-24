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
