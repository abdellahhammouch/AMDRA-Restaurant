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
            console.log(ele);
            const detailsele = document.createElement("section")
            let appn = document.getElementById("opensection__panierpage")
            detailsele.setAttribute("class" , "mt-28")
            detailsele.innerHTML = ` 
            <div class="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-7 bg-orange-50 rounded-3xl p-5">

              <div class="w-full md:w-1/2 ">

                <div class="w-full">
                    <img src="../images/plat-test.png" alt="" class="rounded-2xl bg-[#F7EDE1]">
                </div>

                
                <div class=" grid grid-cols-4 mt-3.5 w-full justify-items-center">

                    <div class="max-w-20 h-20 bg-white border-2 border-orange-500 rounded-xl">
                    <img src="../images/plat-test.png" alt="" class="">
                    </div>

                    <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                    <img src="../images/plat-test.png" alt="" class="">
                    </div>

                    <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                    <img src="../images/plat-test.png" alt="" class="">
                    </div>

                    <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                    <img src="../images/plat-test.png" alt="" class="">
                    </div>
                    
                </div>

                </div>

                <div class="md:w-1/2  ">

                <div class="">
                    <h3 class="text-7xl text-black font-bold mb-2">Tajine Royal</h3>
                    <p class="text-orange-500 text-xl pb-3 pl-1 border-b border-gray-300">85 DH</p>
                </div>

                <div class="pl-1 border-b border-gray-300 ">
                    <p class="text-2xl p-1.5 ">Un tajine marocain authentique préparé avec des morceaux tendres d'agneau, des pruneaux moelleux, des amandes grillées et un mélange d'épices traditionnel. Mijoté lentement selon la recette ancestrale de nos grands-mères pour une saveur incomparable.</p>
                </div>

                <div class="flex gap-3 items-center  pl-1 border-b border-gray-300 ">
                    <p class="font-bold">ingredients</p>
                    <div class="size-12 grid items-center">
                    <img src="../images/Ananas.png" alt="" class="w-10/12 rounded border ">
                    </div>
                    <div class="size-12 grid items-center">
                    <img src="../images/Ananas.png" alt="" class="w-10/12 rounded border">
                    </div>
                    <div class="size-12 grid items-center">
                    <img src="../images/Ananas.png" alt="" class="w-10/12 rounded border">
                    </div>
                    
                </div>

                <div class="py-2  flex justify-between items-center">
                    <span class="font-bold py-2">Size</span>

                    <div class="">
                    <button class="px-2 py-0.5 rounded-md border bg-black text-white ">S</button>
                    <button class="px-2 py-0.5 rounded-md border ">M</button>
                    <button class="px-2 py-0.5 rounded-md border ">L</button>
                    
                    </div>

                </div>

                <div class="">

                    <div class="flex justify-between border-b border-gray-300">
                    <span class="font-bold ">Total Price</span>
                    <span class="font-semibold">200 DH</span>
                    </div>

                    <div class="md:grid grid-cols-[auto_1fr] gap-2 mt-2.5">

                    <div class="flex justify-between items-center border-2 border-gray-200 rounded-4xl">
                        <button class="px-3 py-1 text-gray-600 hover:text-gray-900 ">-</button>
                        <span class="px-3 py-1 font-semibold">1</span>
                        <button class="px-3 py-1 text-gray-600 hover:text-gray-900">+</button>
                    </div>

                    <div class="">
                        <button class="w-full bg-amber-600 text-center p-1.5 rounded-4xl text-white ">Add to cart</button>
                    </div>
                    </div>

                </div>

                </div> 
                
            </div>
            `
            appn.after(detailsele);

        }
    }

}









