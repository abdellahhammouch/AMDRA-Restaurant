const iconburgermeu = document.getElementById("nav__burgermnuicon");
const navlist = document.getElementById("nav__listul")
const animburgermenu = document.getElementById("burgermenu__anim")
const iconpanier = document.getElementById("navpanier__logo")
const paniersection = document.getElementById("opensection__panierpage")
const paniersectionclose = document.getElementById("closesection__panierpage")


iconburgermeu.addEventListener("click" , () =>{
    navlist.classList.toggle("hidden")
    animburgermenu.classList.toggle("w-full")
})

iconpanier.addEventListener("click" , () => {
    paniersection.classList.remove("-right-full"); 
    paniersection.classList.add("right-0")
})

paniersectionclose.addEventListener("click" , () => {
    paniersection.classList.add("-right-full"); 
    paniersection.classList.remove("right-0")
})


