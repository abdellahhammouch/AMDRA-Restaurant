const iconburgermeu = document.getElementById("nav__burgermnuicon");
const navlist = document.getElementById("nav__listul")
const animburgermenu = document.getElementById("burgermenu__anim")


iconburgermeu.addEventListener("click" , (e) =>{
    navlist.classList.toggle("hidden")
    animburgermenu.classList.toggle("w-full")
})