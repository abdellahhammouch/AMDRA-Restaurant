let sectionCards = document.querySelector(".cards");
//les btncategorie
let btnAll = document.querySelector(".btnAll");
let MoroccanCategorie = document.querySelector(".MoroccanCategorie");
let ItalianCategorie = document.querySelector(".ItalianCategorie");
let MexicanCategorie = document.querySelector(".MexicanCategorie");
//search input
let input = document.querySelector(".inputSearch .input");

// panier items

const sizes = ["small", "medium", "large"];

let panier = JSON.parse(localStorage.getItem("panier")) || [];
afiichdatapanier()
let cartItems = [];
let filteredCartItems = [];

let page = 1;
let perPage = 6;

document.querySelector(".left-pagination").addEventListener("click", (e) => {
  if (page == 1) {
    alert("you are in the end of left pagination");
  } else {
    page--;
    afficherPlat();
  }
});

document.querySelector(".right-pagination").addEventListener("click", (e) => {
  count = filteredCartItems.length;
  if (page == Math.ceil(count / perPage)) {
    alert("you are in the end of right pagination");
  } else {
    page++;
    afficherPlat();
  }
});

try {
  fetcheApi();
} catch (error) {
  console.error(error);
} finally {
  console.log("toujour");
}

function fetcheApi() {
  fetch("../Plats.json")
    .then((resp) => resp.json())
    .then((data) => {
      cartItems = data.dishes;
      filteredCartItems = cartItems;
      afficherPlat();
    });
}

//fonction qui permet de filter les plat selon la categorie et rechercher selon le nom
filtrerLesPlats();

function filtrerLesPlats() {
  MoroccanCategorie.addEventListener("click", () => {
    btnAll.setAttribute(
      "class",
      "btnAll text-black border w-22 rounded-[10px]"
    );
    MoroccanCategorie.setAttribute(
      "class",
      "MoroccanCategorie bg-black text-white w-22 h-7 rounded-[10px]"
    );
    ItalianCategorie.setAttribute(
      "class",
      "ItalianCategorie text-black border w-22 rounded-[10px]"
    );
    MexicanCategorie.setAttribute(
      "class",
      "MexicanCategorie text-black border w-22 rounded-[10px]"
    );

    sectionCards.innerHTML = "";
    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        filteredCartItems = data.dishes.filter(
          (ele) => ele.category === "Moroccan"
        );
        page = 1;
        input.value = "";
        afficherPlat();
      });
  });

  //italian
  ItalianCategorie.addEventListener("click", () => {
    ItalianCategorie.setAttribute(
      "class",
      "ItalianCategorie bg-black text-white w-22 h-7 rounded-[10px]"
    );
    btnAll.setAttribute(
      "class",
      "btnAll text-black border w-22 rounded-[10px]"
    );
    MoroccanCategorie.setAttribute(
      "class",
      "MoroccanCategorie  text-black border w-22 rounded-[10px]"
    );
    MexicanCategorie.setAttribute(
      "class",
      "MexicanCategorie text-black border w-22 rounded-[10px]"
    );

    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        filteredCartItems = data.dishes.filter(
          (ele) => ele.category === "Italian"
        );
        page = 1;
        input.value = "";

        afficherPlat();
      });
  });

  //mexican
  MexicanCategorie.addEventListener("click", () => {
    MexicanCategorie.setAttribute(
      "class",
      "MexicanCategorie bg-black text-white w-22 h-7 rounded-[10px]"
    );
    ItalianCategorie.setAttribute(
      "class",
      "ItalianCategorie text-black border w-22 rounded-[10px]"
    );
    btnAll.setAttribute(
      "class",
      "btnAll text-black border w-22 rounded-[10px]"
    );
    MoroccanCategorie.setAttribute(
      "class",
      "MoroccanCategorie  text-black border w-22 rounded-[10px]"
    );

    sectionCards.innerHTML = "";
    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        filteredCartItems = data.dishes.filter(
          (ele) => ele.category === "Mexican"
        );
        page = 1;
        input.value = "";

        afficherPlat();
      });
  });

  btnAll.addEventListener("click", () => {
    btnAll.setAttribute(
      "class",
      "btnAll bg-black text-white w-22 h-7 rounded-[10px]"
    );
    ItalianCategorie.setAttribute(
      "class",
      "ItalianCategorie text-black border w-22 rounded-[10px]"
    );
    MoroccanCategorie.setAttribute(
      "class",
      "MoroccanCategorie  text-black border w-22 rounded-[10px]"
    );
    MexicanCategorie.setAttribute(
      "class",
      "MexicanCategorie text-black border w-22 rounded-[10px]"
    );
        input.value = "";

    fetcheApi();
  });

  // search width input
  input.addEventListener("input", () => {
    inputvalue = input.value.toLowerCase();
    sectionCards.innerHTML = "";
    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        filteredCartItems = data.dishes.filter(
          (ele) => ele.name.toLowerCase().includes(inputvalue)
        );
        page = 1;

        afficherPlat();
      });
  });
}




//afficher les plats
function afficherPlat() {
  let start = (page - 1) * perPage;
  sectionCards.innerHTML = "";

  for (let i = start; i < start + perPage; i++) {
    if (i >= filteredCartItems.length) {
      break;
    }

    const ele = filteredCartItems[i];

    div = document.createElement("div");
    div.setAttribute("class", "oneCard");
    div.setAttribute(
      "class",
      "w-60 h-80  rounded-[8px] flex flex-col  items-center justify-evenly shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] "
    );

    div.innerHTML = `
             <img src="../${ele.image}" class="w-45 oneCardImgPlat" alt="none">
            <div class="titleAndPrice w-52 flex justify-between">
                        <h3 class="inter-font font-semibold text-[15px] cursor-pointer pourDetails"  data-id="${ele.id}" data-categhorie="dishes"  titlePlat">${ele.name}</h3>
                <h4 class="inter-font font-semibold PricePlat"><span class="text-[#FF6868] text-[12px]">$</span>${ele.price}</h4>
            </div>
            <p class="inter-font text-[#555555] text-[13px] descriptionPlat  w-52">${ele.description}</p> 
            <div class="sizeAndBtnAddToCart w-52 flex  justify-between items-center ">
                <div class="flex w-1/2 justify-between sizesPlat">
                    <div data-id="${ele.id}"  data-size="small" class="cursor-pointer size S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div data-id="${ele.id}"  data-size="medium" class="cursor-pointer size M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div data-id="${ele.id}"  data-size="large" class="cursor-pointer size L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                <button data-id="${ele.id}" data-size="small" class="btnAddToCart w-7/12 h-8 bg-orange-500 rounded-lg ml-2 text-white">+ To Cart</button>
            </div>
            `;

    sectionCards.appendChild(div);

    const relatedBtn = document.querySelector(
      `.btnAddToCart[data-id="${ele.id}"]`
    );

    relatedBtn.addEventListener("click", (e) => {
      const selectedSize = e.target.getAttribute("data-size");
      const selectedId = e.target.getAttribute("data-id");

      const existingCartItem = panier.find(
        (item) => item.id == selectedId && item.size == selectedSize
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        const cart = cartItems.find((item) => item.id == selectedId);

        panier.push({ ...cart, size: selectedSize, quantity: 1 });
      }

      localStorage.setItem("panier", JSON.stringify(panier));
      afiichdatapanier()

      alert("Plat ajouter au panier");
    });
  }

  

  document.querySelectorAll(".pourDetails").forEach(el => {
    el.addEventListener("click", (e) => {

      const id = e.currentTarget.dataset.id;
      const categorie = e.currentTarget.dataset.categhorie;

      localStorage.setItem("courrentcategorieDetails", categorie);
      localStorage.setItem("courrentIdDetails", id);

      location.href = "/src/pages/detail-menu.html";

    })
  });

  const sizes = document.querySelectorAll(".size");

  sizes.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const size = e.currentTarget.dataset.size;
      const id = e.currentTarget.dataset.id;

      e.currentTarget.classList.remove("bg-white", "text-black", "border");
      e.currentTarget.classList.add("bg-black", "text-white");

      const relatedBtn = document.querySelector(
        `.btnAddToCart[data-id="${id}"]`
      );

      relatedBtn.setAttribute("data-size", size);

      sizes.forEach((ele) => {
        if (
          ele.dataset.id == e.currentTarget.dataset.id &&
          ele.dataset.size != size
        ) {
          ele.classList.remove("bg-black", "text-white");
          ele.classList.add("bg-white", "text-black", "border");
        }
      });
    });
  });


}



// afficher panier 



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
        cart.innerHTML =  `
            
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
    panier = panier.filter((item) => !(item.id == deleteCard.dataset.id && item.size == deleteCard.dataset.size));
    localStorage.setItem("panier", JSON.stringify(panier));
    afiichdatapanier()
    }

    if(e.target.closest(".increse")){
    const incqonti = e.target.closest(".increse");
    const cart = panier.find((item) => item.id == incqonti.dataset.id && item.size == incqonti.dataset.size);
    
    if(cart.quantity > 1){
      cart.quantity-- ;
      const spanmod = incqonti.closest("div").querySelector(".quantityafficher");
      spanmod.textContent = cart.quantity;
     }
    localStorage.setItem("panier", JSON.stringify(panier));
    pricepanier();
    }

    if(e.target.closest(".decrease")){
      const decrqunti = e.target.closest(".decrease");
      const cart = panier.find((item) => item.id == decrqunti.dataset.id && item.size == decrqunti.dataset.size);
      cart.quantity++ ;
      const spanmod = decrqunti.closest("div").querySelector(".quantityafficher");
      spanmod.textContent = cart.quantity;
      localStorage.setItem("panier", JSON.stringify(panier));
      pricepanier();
    }
  

})

function pricepanier(){
  let elepanier = JSON.parse(localStorage.getItem("panier")) || [];
  let totalprice = 0;
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

  // document.querySelectorAll(".calctotal").forEach((ele) => {    
    let eletotalprice = document.createElement("div")
    // totalprice = totalprice + Number(ele.textContent) ;
    eletotalprice.setAttribute("class" , "flex justify-between px-10 py-2 border-t-2")
    eletotalprice.innerHTML = `
        <h2 class=" font-bold">Total</h2>
        <span class="text-[#767676]">${som}$</span>
    `
    totalpriceplace.append(eletotalprice);
    // })
  
}


document.querySelector("#condirmererPurshach").addEventListener("click" , (e) => {
  location.href = "/src/pages/payment.html"
})







