// ==============================================================
// start part dyal burger menu mobile and part of side bar panier

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
    paniersection.classList.remove("right-0");
})

// finish part dyal burger menu mobile and part of side bar panier


// =======================
// start page de detailles 

let plat ;

fetch("/data.json")
    .then(response  => {
        if(!response.ok){
            throw new Error("Erreur dans le chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        plat = data    
        if(window.location.pathname.includes("detail-menu.html")){
            afficherDetails();
        }    
    })
    .catch(error => {console.error(error)})



    


document.querySelectorAll(".pourDetails").forEach(el => {
     el.addEventListener("click" , (e) => {

        const id = e.currentTarget.dataset.id;
        localStorage.setItem("courrentIdDeyails" , id );

        location.href = "/src/pages/detail-menu.html";

    })
});

function afficherDetails() {

    console.log();
    const courrentId = localStorage.getItem("courrentIdDeyails");

    for(ele of plat.dishes){
        if(ele.id == courrentId) {
            const detailsele = document.createElement("section")
            detailsele.innerHTML = `  `
        }
    }

}









