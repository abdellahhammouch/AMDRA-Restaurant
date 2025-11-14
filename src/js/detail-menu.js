// const panier = JSON.parse(localStorage.getItem("panier")) || [];
const panier = homepanier;
let quantity = 1;

fetch("/src/Plats.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur dans le chargement du fichier JSON");
    }
    return response.json();
  })
  .then((data) => {
    plat = data;
    if (window.location.pathname.includes("detail-menu.html")) {
      afficherDetails();
    }
  })
  .catch((error) => console.error(error));

function afficherDetails() {
  const courrentId = localStorage.getItem("courrentIdDetails");
  const courrentCategorie = localStorage.getItem("courrentcategorieDetails");

  if (courrentCategorie == "dishes") {
    for (ele of plat.dishes) {
      if (ele.id == courrentId) {
        const detailsele = document.createElement("section");
        let appn = document.querySelector("nav");
        detailsele.setAttribute("class", "mt-28");

        detailsele.innerHTML = ` 
                <div class="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-7 bg-orange-50 rounded-3xl p-5">
    
                  <div class="w-full md:w-1/2 ">
    
                    <div class="w-full">
                        <img src="../${ele.image}" alt="" class="rounded-2xl  bg-[#F7EDE1]">
                    </div>
    
                    
                    <div class=" grid grid-cols-4 mt-3.5 w-full justify-items-center">
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
                        
                    </div>
    
                    </div>
    
                    <div class="md:w-1/2  ">
    
                    <div class="">
                        <h3 class="text-7xl text-black finger-font font-bold mb-2">${ele.name}</h3>
                        <p class="text-orange-500 text-xl pb-3 pl-1 border-b border-gray-300">${ele.price}$</p>
                    </div>
    
                    <div class="pl-1 border-b afacad-font border-gray-300 ">
                        <p class="text-2xl p-1.5 ">${ele.description}.</p>
                    </div>
    
                    <div class="flex gap-3 items-center  pl-1 border-b border-gray-300 ">
                        <p class="font-bold">ingredients</p>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[0].image}" alt="" class="w-10/12 rounded border ">
                        </div>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[1].image}" alt="" class="w-10/12 rounded border">
                        </div>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[2].image}" alt="" class="w-10/12 rounded border">
                        </div>
                    </div>
    
                    <div class="py-2  flex justify-between items-center">
                        <span class="font-bold py-2">Size</span>
                        <div class="flex w-1/2 justify-end gap-2 sizesPlat">
                    <div data-id="${ele.id}"  data-size="small" class="cursor-pointer size S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div data-id="${ele.id}"  data-size="medium" class="cursor-pointer size M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div data-id="${ele.id}"  data-size="large" class="cursor-pointer size L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                    </div>
    
                    <div class="">
    
                        <div class="flex justify-between border-b border-gray-300">
                        <span class="font-bold ">Total Price</span>
                        <span class="font-semibold">${ele.price}$</span>
                        </div>
    
                        <div class="md:grid grid-cols-[auto_1fr] gap-2 mt-2.5">
    
                        <div class="flex justify-between items-center border-2 border-gray-200 rounded-4xl">
                            <button id="decreaseContiter" class="px-3 py-1 text-gray-600 hover:text-gray-900 ">-</button>
                            <span id="cantiterOrder" class="px-3 py-1 font-semibold">${quantity}</span>
                            <button id="increaseContiter" class="px-3 py-1 text-gray-600 hover:text-gray-900">+</button>
                        </div>
                        <div class="">
                            <button  data-id=${ele.id} data-size="small" id="buttonAdd" type="submit" class="btnAddToCart w-full bg-amber-600 text-center p-1.5 rounded-4xl text-white ">Add to cart</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>
                `;
        appn.after(detailsele);
      }
    }
  } else if (courrentCategorie == "promotions") {
    console.log("rah dkhalt lpromo");
    for (ele of plat.promotions) {
      if (ele.id == courrentId) {
        const detailsele = document.createElement("section");
        let appn = document.querySelector("nav");
        detailsele.setAttribute("class", "mt-28");
        detailsele.innerHTML = ` 
                <div class="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-7 bg-orange-50 rounded-3xl p-5">
    
                  <div class="w-full md:w-1/2 ">
    
                    <div class="w-full">
                        <img src="../${ele.image}" alt="" class="rounded-2xl  bg-[#F7EDE1]">
                    </div>
    
                    
                    <div class=" grid grid-cols-4 mt-3.5 w-full justify-items-center">
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
    
                        <div class="max-w-20 h-20 bg-white border-2 border-gray-200 rounded-xl">
                        <img src="../${ele.image}" alt="" class="">
                        </div>
                        
                    </div>
    
                    </div>
    
                    <div class="md:w-1/2  ">
    
                    <div class="">
                        <h3 class="text-7xl text-black font-bold finger-font mb-2">${ele.name}</h3>
                        <p class="text-orange-500 text-xl pb-3 pl-1 border-b border-gray-300">${ele.price}$</p>
                    </div>
    
                    <div class="pl-1 border-b afacad-font border-gray-300 ">
                        <p class="text-2xl p-1.5 ">${ele.description}.</p>
                    </div>
    
                    <div class="flex gap-3 items-center  pl-1 border-b border-gray-300 ">
                        <p class="font-bold">ingredients</p>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[0].image}" alt="" class="w-10/12 rounded border ">
                        </div>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[1].image}" alt="" class="w-10/12 rounded border">
                        </div>
                        <div class="size-12 grid items-center">
                        <img src="../${ele.ingredients[2].image}" alt="" class="w-10/12 rounded border">
                        </div>
                    </div>
    
                    <div class="py-2  flex justify-between items-center">
                        <span class="font-bold py-2">Size</span>
                        <div class="flex w-1/2 justify-end gap-2 sizesPlat">
                    <div data-id="${ele.id}"  data-size="small" class="cursor-pointer size S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div data-id="${ele.id}"  data-size="medium" class="cursor-pointer size M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div data-id="${ele.id}"  data-size="large" class="cursor-pointer size L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                    </div>
    
                    <div class="">
    
                        <div class="flex justify-between border-b border-gray-300">
                        <span class="font-bold ">Total Price</span>
                        <span class="font-semibold">${ele.price}$</span>
                        </div>
    
                        <div class="md:grid grid-cols-[auto_1fr] gap-2 mt-2.5">
    
                        <div class="flex justify-between items-center border-2 border-gray-200 rounded-4xl">
                            <button id="decreaseContiter" class="px-3 py-1 text-gray-600 hover:text-gray-900 ">-</button>
                            <span id="cantiterOrder" class="px-3 py-1 font-semibold">${quantity}</span>
                            <button id="increaseContiter" class="px-3 py-1 text-gray-600 hover:text-gray-900">+</button>
                        </div>
                        <div class="">
                            <button  data-id=${ele.id} data-size="small" id="buttonAdd" type="submit" class="btnAddToCart w-full bg-amber-600 text-center p-1.5 rounded-4xl text-white ">Add to cart</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>
                `;
        appn.after(detailsele);
      }
    }
  }

  const sizes = document.querySelectorAll(".size");
  console.log;
  sizes.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      console.log(e.currentTarget);
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

  const relatedBtn = document.querySelector(`.btnAddToCart`);

  relatedBtn.addEventListener("click", (e) => {
    const selectedSize = e.target.getAttribute("data-size");
    const selectedId = e.target.getAttribute("data-id");

    const existingCartItem = panier.find(
      (item) => item.id == selectedId && item.size == selectedSize
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      const courrentId = localStorage.getItem("courrentIdDetails");
      const courrentCategorie = localStorage.getItem(
        "courrentcategorieDetails"
      );

      const data =
        courrentCategorie == "dishes" ? plat.dishes : plat.promotions;
      const cart = data.find((item) => item.id == selectedId);

      panier.push({ ...cart, size: selectedSize, quantity: quantity });
    }

    localStorage.setItem("panier", JSON.stringify(panier));
    afiichdatapanier();
    alert("Plat ajouter au panier");
  });

  addPanierPAgeDEtails();
}

function addPanierPAgeDEtails() {
  let incrementcont = document.querySelector("#increaseContiter");
  let decreascont = document.querySelector("#decreaseContiter");
  let contiter = document.querySelector("#cantiterOrder");

  incrementcont.addEventListener("click", (e) => {
    quantity++;
    contiter.textContent = quantity;
  });
  decreascont.addEventListener("click", (e) => {
    if (quantity > 1) {
      quantity--;
    }
    contiter.textContent = quantity;
  });
  document.getElementById("buttonAdd").addEventListener("click", (e) => {});
}
