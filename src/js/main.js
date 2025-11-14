let HeroImages = [
  {
    name: "egg-salad",
    // url: "./src/images/egg-salad.png",
    url: "/src/images/test.png",
  },
  {
    name: "fattoush-salad",
    // url: "./src/images/fattoush-salad.png",
    url: "/src/images/test.png",
  },
  {
    name: "salad",
    // url: "./src/images/fattoush-salad.png",
    url: "/src/images/test.png",
  },
  {
    name: "meat-salad",
    // url: "./src/images/meat-salad.png",
    url: "/src/images/test.png",
  },
  {
    name: "vegetable-salad",
    // url: "./src/images/vegetable-salad.png",
    url: "/src/images/test.png",
  },
];

const slider = document.querySelector(".hero .images");
let selectedIndex = -1;
let isAnimating = false;
printHeroSection();

function printHeroSection() {
  // print images outside the slider
  HeroImages.forEach((image, i) => {
    const img = document.createElement("img");
    img.setAttribute("data-index", i);
    img.src = image.url;
    img.style.transform = "translateX(700%)";
    slider.append(img);
  });

  let buttonCount = HeroImages.length;
  let leftSpace = 0;

  HeroImages.forEach((image, i) => {
    // create the buttons
    const btn = document.createElement("button");

    if (i+1 > Math.ceil(buttonCount / 2)) {
      leftSpace -= 20;
    } else if (i < Math.ceil(buttonCount / 2)) {
      leftSpace += 20;
    }
    
  btn.style.transform = `translateX(${leftSpace}px)`;

    btn.textContent = image.name;
    btn.classList.add(
      "btn",
      "px-4",
      "py-2",
      "rounded-full",
      "bg-limoni",
      "text-white"
    );
    btn.setAttribute("data-index", i);

    // select first button and show it's image
    if (i === 0) {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add(
        "border-2",
        "border-limoni",
        "bg-transparent",
        "text-black"
      );
      document.querySelector(
        `.hero .images img[data-index="${i}"]`
      ).style.transform = "translateX(0)";
      selectedIndex = i;
    }

    // add event listner when button is clicked
    btn.addEventListener("click", (clickedButton) => {
      const newImageIndex = clickedButton.target.getAttribute("data-index");
      if (isAnimating || selectedIndex === newImageIndex) return;
      isAnimating = true;

      // Reset all buttons
      document.querySelectorAll(".hero .buttons button").forEach((b) => {
        b.classList.remove(
          "border-2",
          "border-limoni",
          "bg-transparent",
          // "text-black"
          "text-white"
        );

        b.classList.add("bg-blue-600", "text-white");
      });

      // Apply active style
      clickedButton.target.classList.remove("bg-blue-600", "text-white");
      clickedButton.target.classList.add(
        "border-2",
        "border-limoni",
        "bg-transparent",
        "text-black"
      );

      const previousImage = document.querySelector(
        `.hero .images img[data-index="${selectedIndex}"]`
      );

      const newImage = document.querySelector(
        `.hero .images img[data-index="${newImageIndex}"]`
      );

      newImage.style.transition = "none";
      newImage.style.transform = "translateX(700%)";
      newImage.offsetWidth;

      previousImage.style.cssText = `
        transition: transform 1s;
        transform: translateX(-700%);
        `;
      newImage.style.cssText = `
        transition: transform 1s;
        transform: translateX(0%);
    `;
      selectedIndex = newImageIndex;

      previousImage.addEventListener(
        "transitionend",
        () => {
          isAnimating = false;
        },
        { once: true }
      );
    });

    document.querySelector(".hero .buttons").append(btn);
  });
}
