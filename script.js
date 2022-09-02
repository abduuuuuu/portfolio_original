//script to handle the stickiness of the header
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})
const burger = document.getElementsByClassName("menu")[0];
burger.addEventListener("click",function(){
    burger.classList.toggle("bx-x");
    burger.classList.toggle("burger-active");
    const ul = document.querySelector("ul");
    ul.classList.toggle("ul-active")
})
