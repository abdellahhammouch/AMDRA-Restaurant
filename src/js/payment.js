let panier = JSON.parse(localStorage.getItem("panier")) || [];
afiichdatapanier()
let somme = 0 ;

document.getElementById("btnPDF").addEventListener("click", () => {
    const name = document.getElementById('name').value;
    const adresse = document.getElementById('adresse').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/;
    const phoneRegex = /^[+]?[\d]{8,15}$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      alert("Veuillez entrer un nom valide (au moins 3 lettres).");
      return;
    }
    if (!adresse || adresse.length < 5) {
      alert("Veuillez entrer une adresse valide.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    alert("Commande bien envoyée");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let line = 90;


    doc.setFontSize(22);
    doc.setTextColor(255, 87, 34);
    doc.text("Confirmation de commande", 105, 25, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(`Nom : ${name}`, 20, 50);
    doc.text(`Téléphone : ${phone}`, 20, 60);
    doc.text(`Adresse : ${adresse}`, 20, 70);
    doc.text(`Email : ${email}`, 20, 80);
    panier.forEach((element) => {
    doc.text(`${element.name} : ${element.quantity * element.price}$ `, 20, line);
    somme += element.quantity * element.price; 
    line += 10
    });
    doc.text(`Total : ${somme}$`, 20, line);
    line += 10
    doc.setFontSize(14);
    doc.setTextColor(0, 150, 0);
    doc.text(`Merci pour votre commande`, 20, line);
    doc.save("commande.pdf");
    localStorage.removeItem("panier")
    location.href = "/index.html"


});
  

function afficherPagepayment(){
  let placeorder = document.querySelector("#paymentPlaceOrder")
  let placetotalprice = document.querySelector("#total")
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  let somme = 0 ;
placeorder.innerHTML = ``
  panier.forEach((element) => {
    let li = document.createElement("li")
    li.innerHTML = `
      ${element.name} - ${element.quantity * element.price} 
    `
    somme += element.quantity * element.price;
    placeorder.append(li)
    
  });

  placetotalprice.textContent = somme + "$"
}

afficherPagepayment();

console.log(somme);


function afiichdatapanier(){
    let panierpart = document.querySelector("#placeofpurchases")
    // let priceplice = document.querySelector("#priceplace")

    let elepanier = JSON.parse(localStorage.getItem("panier")) || [];

    panierpart.innerHTML = ``
    // priceplice.innerHTML = ``

    for(ele of elepanier){
        let cart = document.createElement("div")
        // let pricepart = document.createElement("div")
        cart.setAttribute("class" , "grid grid-cols-[50px_3fr_1.5fr] bg-white rounded-3xl p-3 gap-2 mb-5")
        cart.innerHTML = `
        
                <div class="p-2 flex items-center justify-center">
                    <img src="/src/${ele.image}" alt="logo_plat" class="w-full h-auto rounded-xl">
                </div>
                <div class="flex flex-col justify-center">
                    <h3 class="font-bold text-lg mb-1">${ele.name}</h3>
                    <p class="text-xs text-[#868686] mb-2">${ele.description.split(" ").slice(0, 5).join(" ")}</p>
                    <div class="flex items-center gap-2">
                    <span class="text-bold text-orange-500 text-base">${ele.price}$</span>
                    <span class="text-sm border-2 p-1 rounded-full">${ele.size}</span>
                    </div>
                </div>
                <div class="flex flex-col justify-between my-3  ">
                    <svg data-id="${ele.id}" data-size="${ele.size}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-600 self-center cursor-pointer hover:text-red-700 transition-colors suppresions">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <div class="flex text-xl justify-between items-center gap-2">
                      <button  data-id="${ele.id}" data-size="${ele.size}" class="increse border border-gray-300 flex justify-center items-center  rounded-lg hover:bg-gray-200 px-3   h-7 transition-all">-</button>
                      <span class="quantityafficher font-semibold">${ele.quantity}</span>
                      <button   data-id="${ele.id}" data-size="${ele.size}" class="decrease border border-gray-300 flex justify-center  items-center rounded-lg hover:bg-gray-200 px-3  h-7 transition-all">+</button>

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
    afficherPagepayment()
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
    afficherPagepayment()
    }

    if(e.target.closest(".decrease")){
      const decrqunti = e.target.closest(".decrease");
      const cart = panier.find((item) => item.id == decrqunti.dataset.id && item.size == decrqunti.dataset.size);
      cart.quantity++ ;
      const spanmod = decrqunti.closest("div").querySelector(".quantityafficher");
      spanmod.textContent = cart.quantity;
      localStorage.setItem("panier", JSON.stringify(panier));
      pricepanier();
      afficherPagepayment()
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

