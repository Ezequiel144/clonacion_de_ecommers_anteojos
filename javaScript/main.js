const menu = document.querySelector(".box1__cont3__menu");
const nav = document.querySelector(".nav2");
const nav_2 = document.querySelector(".nav2__list");
const cart = document.querySelector(".box1__cont2__cart")
const cartdiv = document.querySelector(".cartdiv")
const cartX = document.querySelector(".cartdiv__x");
const clickcart = document.querySelector("#cart1");
const cantidad = document.querySelector(".cartdiv__content__cont__number")
let cont = 0;


menu.addEventListener("click",()=>{
    /* nav.style.height = "100%"; */
    nav.classList.toggle("mostrar");
})

cart.addEventListener("click",()=>{
    cartdiv.style.display = "block";
    
})

cartX.addEventListener("click",()=>{
    cartdiv.style.display = "none";
})

clickcart.addEventListener("click",()=>{
    cont++;
    cartdiv.style.display = "block";
    cantidad.value = cont;
})
