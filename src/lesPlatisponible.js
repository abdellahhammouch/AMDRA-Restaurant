let sectionCards = document.querySelector(".cards");
try {
    fetcheApi();
} catch (error) {
    console.error(error);
} finally {
    console.log("toujour");
}
function fetcheApi() {
    fetch("../Plats.json").then(resp => resp.json())
        .then(data => {
            // console.log(data.dishes.length);
            data.dishes.forEach(ele => {
                div = document.createElement("div");
                div.setAttribute('class',"oneCard") ;
                div.setAttribute('data-id',ele.id) ;
                // div.cssText="w-60 h-80  shadow-2xl rounded-\[8px\] flex flex-col  items-center justify-evenly";
                div.setAttribute('class', 'w-60 h-80  rounded-[8px] flex flex-col  items-center justify-evenly shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] ');
                // console.log(ele.image);

                div.innerHTML = `
             <img src="../${ele.image}" class="w-45 oneCardImgPlat" alt="none">
            <div class="titleAndPrice w-46 flex justify-between">
                <h3 class="inter-font font-semibold text-[15px] titlePlat">${ele.name}</h3>
                <h4 class="inter-font font-semibold PricePlat"><span class="text-[#FF6868] text-[12px]">$</span>${ele.price}</h4>
            </div>
            <p class="inter-font text-[#555555] text-[13px] descriptionPlat  w-[10rem]">${ele.description}</p>
            <div class="sizeAndBtnAddToCart w-[13rem] flex  justify-between items-center ">
                <div class="flex w-1/2 justify-between sizesPlat">
                    <div class="S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div class="M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div class="L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                <button class="btnAddToCart w-7/12 h-8 bg-[#F59124] rounded-[8px] ml-2 text-white">+ To Cart</button>
            </div>
            `;
                sectionCards.appendChild(div);
            })
        }

        )
}

{/* <div class="oneCard w-60 h-80  shadow-2xl rounded-\[8px\] flex flex-col  items-center justify-evenly">
            <img src="../images/Plat.svg" class="w-40 oneCardImgPlat" alt="none">
            <div class="titleAndPrice w-56 flex justify-around">
                <h3 class="inter-font font-semibold text-[17px] titlePlat">Egg vegi salad</h3>
                <h4 class="inter-font font-semibold PricePlat"><span class="text-[#FF6868] text-[12px]">$</span>23.00</h4>
            </div>
            <p class="-ml-14 inter-font text-[#555555] text-[13px] descriptionPlat">Description of the item</p>
            <div class="sizeAndBtnAddToCart w-\[13rem] flex  justify-between items-center ">
                <div class="flex w-1/2 justify-between sizesPlat">
                    <div class="S  bg-black text-white w-7 h-7 text-center rounded-[5px] smalSize">S</div>
                    <div class="M  bg-white text-black w-7 h-7 text-center rounded-[5px] border meduimSize">M</div>
                    <div class="L bg-white text-black w-7 h-7 text-center rounded-[5px] border largSize">L</div>
                </div>
                <button class="btnAddToCart w-7/12 h-8 bg-[#F59124] rounded-\[8px] ml-2 text-white">+ To Cart</button>
            </div>
        </div> */}