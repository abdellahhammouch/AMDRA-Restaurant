// function x() {

const iconburgermeu = document.getElementById("nav__burgermnuicon");
const navlist = document.getElementById("nav__listul")
const animburgermenu = document.getElementById("burgermenu__anim")
const iconpanier = document.getElementById("navpanier__logo")
const paniersection = document.getElementById("opensection__panierpage")
const paniersectionclose = document.getElementById("closesection__panierpage")

let homepanier = JSON.parse(localStorage.getItem("panier")) || [];
afiichdatapanier() ; 
pricepanier() ;


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





function afiichdatapanier(){
    let panierpart = document.querySelector("#placeofpurchases")
    // let priceplice = document.querySelector("#priceplace")

    let elepanier = JSON.parse(localStorage.getItem("panier")) || [];

    panierpart.innerHTML = ``
    // priceplice.innerHTML = ``

    for(ele of elepanier){
        let cart = document.createElement("div")
        // let pricepart = document.createElement("div")
        cart.setAttribute("class" , "grid grid-cols-[80px_auto_1fr] md:grid-cols-[80px_3fr_1.5fr] bg-white rounded-3xl p-3 gap-2 mb-5")
        cart.innerHTML = `
            
                <div class="p-2 flex  items-center justify-center">
                    <img src="/src/${ele.image}" alt="logo_plat" class="w-auto h-auto rounded-xl">
                </div>
                <div class="flex flex-col justify-center">
                    <h3 class="font-bold text-xs md:text-lg mb-1">${ele.name}</h3>
                    <p class="md:text-xs text-xs text-[#868686] mb-2">${ele.description.split(" ").slice(0, 5).join(" ")}</p>
                    <div class="flex flex-col md:flex-row items-center gap-2">
                    <span class="text-bold text-orange-500 text-base">${ele.price}$</span>
                    <span class="text-sm border-2 p-1 rounded-full">${ele.size}</span>
                    </div>
                </div>
                <div class="flex flex-col justify-between my-3  ">
                    <svg data-id="${ele.id}" data-size="${ele.size}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-600 self-center cursor-pointer hover:text-red-700 transition-colors suppresions mb-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <div class="flex flex-col sm:flex-row sm:text-xl sm:justify-between items-center gap-2">
                      <button  data-id="${ele.id}" data-size="${ele.size}" class="increse border border-gray-300 flex justify-center items-center  rounded-lg hover:bg-gray-200 px-3   md:h-7 transition-all">-</button>
                      <span class="quantityafficher font-semibold">${ele.quantity}</span>
                      <button   data-id="${ele.id}" data-size="${ele.size}" class="decrease border border-gray-300 flex justify-center  items-center rounded-lg hover:bg-gray-200 px-3 h-7 transition-all">+</button>

                    </div>
                </div>
        `;
        panierpart.append(cart);
    }
    pricepanier()
}


document.querySelector("#placeofpurchases").addEventListener("click" , (e) => {
    if(e.target.closest(".suppresions")){
    const deleteCard = e.target.closest(".suppresions");
    homepanier = homepanier.filter((item) => !(item.id == deleteCard.dataset.id && item.size == deleteCard.dataset.size));
    localStorage.setItem("panier", JSON.stringify(homepanier));
    afiichdatapanier()
    }

    if(e.target.closest(".increse")){    
    let incqonti = e.target.closest(".increse");
    let cart = homepanier.find((item) => item.id == incqonti.dataset.id && item.size == incqonti.dataset.size);
    console.log(cart + incqonti.dataset.id + incqonti.dataset.size);
    console.log(homepanier)
    if(cart.quantity > 1){
      cart.quantity-- ;
      const spanmod = incqonti.closest("div").querySelector(".quantityafficher");
      spanmod.textContent = cart.quantity;
     }
    localStorage.setItem("panier", JSON.stringify(homepanier));
    pricepanier();
    }

    if(e.target.closest(".decrease")){
      const decrqunti = e.target.closest(".decrease");
      const cart = homepanier.find((item) => item.id == decrqunti.dataset.id && item.size == decrqunti.dataset.size);
      cart.quantity++ ;
      const spanmod = decrqunti.closest("div").querySelector(".quantityafficher");
      spanmod.textContent = cart.quantity;
      localStorage.setItem("panier", JSON.stringify(homepanier));
      pricepanier();
    }
  

})

function pricepanier(){
  let elepanier = JSON.parse(localStorage.getItem("panier")) || [];
  let priceplice = document.querySelector("#priceplace")
  let totalpriceplace = document.querySelector("#totalprice")
  totalpriceplace.innerHTML = ``
  priceplice.innerHTML = ``
  let  som = 0;
  for(ele of elepanier){
    let pricepart = document.createElement("div")
     pricepart.innerHTML = `
            <div class="flex justify-between px-10 py-2 ">
              <h2 class=" font-bold">${ele.name}</h2>
              <span  class="calctotal text-[#767676]">${ele.price * ele.quantity}</span>
            </div>
        `
        som += ele.price * ele.quantity
        priceplice.append(pricepart)
  }

    let eletotalprice = document.createElement("div")
    eletotalprice.setAttribute("class" , "flex justify-between px-10 py-2 border-t-2")
    eletotalprice.innerHTML = `
        <h2 class=" font-bold">Total</h2>
        <span class="text-[#767676]">${som}$</span>
    `
    totalpriceplace.append(eletotalprice);
  
}


document.querySelector("#condirmererPurshach").addEventListener("click" , (e) => {
  location.href = "/src/pages/payment.html"
})
// }
// x();