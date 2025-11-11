let sectionCards = document.querySelector(".cards");
//les btncategorie
let btnAll = document.querySelector(".btnAll");
let MoroccanCategorie = document.querySelector(".MoroccanCategorie");
let ItalianCategorie = document.querySelector(".ItalianCategorie");
let MexicanCategorie = document.querySelector(".MexicanCategorie");
//search input
let input = document.querySelector(".inputSearch .input");

const sizes = ["small", "medium", "large"];

const panier = JSON.parse(localStorage.getItem("panier")) || [];
let cartItems = [];

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
      afficherPlat(data.dishes);
    });
}

//fonction qui permet de filter les plat selon la categorie et rechercher selon le nom
filtrerLesPlats();
function filtrerLesPlats() {
  MoroccanCategorie.addEventListener("click", () => {
    // console.log('hello');
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
        console.log(data);

        const MorocanPlat = data.dishes.filter(
          (ele) => ele.category === "Moroccan"
        );
        afficherPlat(MorocanPlat);
      });
  });

  //italian
  ItalianCategorie.addEventListener("click", () => {
    // console.log('hello');
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

    sectionCards.innerHTML = "";
    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        const ItalianPlat = data.dishes.filter(
          (ele) => ele.category === "Italian"
        );

        afficherPlat(ItalianPlat);
      });
  });

  //mexican
  MexicanCategorie.addEventListener("click", () => {
    // console.log('hello');
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
        console.log(data);

        const MexicanPlat = data.dishes.filter(
          (ele) => ele.category === "Mexican"
        );

        afficherPlat(MexicanPlat);
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
    fetcheApi();
  });

  // search width input
  input.addEventListener("input", () => {
    inputvalue = input.value.toLowerCase();
    sectionCards.innerHTML = "";
    fetch("../Plats.json")
      .then((resp) => resp.json())
      .then((data) => {
        const platRechercher = data.dishes.filter((ele) =>
          ele.name.toLowerCase().includes(inputvalue)
        );

        afficherPlat(platRechercher);
      });
  });
}

//afficher les plats
function afficherPlat(Plats) {
  Plats.forEach((ele) => {
    div = document.createElement("div");
    div.setAttribute("class", "oneCard");
    // div.setAttribute('data-id', ele.id);
    // div.cssText="w-60 h-80  shadow-2xl rounded-\[8px\] flex flex-col  items-center justify-evenly";
    div.setAttribute(
      "class",
      "w-60 h-80  rounded-[8px] flex flex-col  items-center justify-evenly shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] "
    );
    // console.log(ele.image);

    div.innerHTML = `
             <img src="../${ele.image}" class="w-45 oneCardImgPlat" alt="none">
            <div class="titleAndPrice w-52 flex justify-between">
                <h3 class="inter-font font-semibold text-[15px] data-id="${ele.id}" data-categhorie=""  titlePlat">${ele.name}</h3>
                <h4 class="inter-font font-semibold PricePlat"><span class="text-[#FF6868] text-[12px]">$</span>${ele.price}</h4>
            </div>
            <p class="inter-font text-[#555555] text-[13px] descriptionPlat  w-[13rem]">${ele.description}</p>
            <div class="sizeAndBtnAddToCart w-[13rem] flex  justify-between items-center ">
                <div class="flex w-1/2 justify-between sizesPlat">
                    <div data-id="${ele.id}"  data-size="small" class="cursor-pointer size S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div data-id="${ele.id}"  data-size="medium" class="cursor-pointer size M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div data-id="${ele.id}"  data-size="large" class="cursor-pointer size L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                <button data-id="${ele.id}" data-size="small" class="btnAddToCart w-7/12 h-8 bg-[#F59124] rounded-[8px] ml-2 text-white">+ To Cart</button>
            </div>
            `;
    sectionCards.appendChild(div);

    const relatedBtn = document.querySelector(`.btnAddToCart[data-id="${ele.id}"]`);

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
      alert("Plat ajouter au panier");
    });


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
