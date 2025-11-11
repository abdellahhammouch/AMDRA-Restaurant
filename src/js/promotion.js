const fetchPromotions = () =>
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      const promotionContainer = document.querySelector(".carousel-track");

      const promotionItems = data.promotions.map((item) => {
        const promotionItem = document.createElement("div");
        promotionItem.setAttribute("data-id", item.id);
        promotionItem.classList.add("card");

        promotionItem.innerHTML = `
                    <div class="card-image">
                      <img src="./${item.image}"/></div>
                    <div class="card-content">
                        <h3>Browse All 1</h3>
                        <p>(255 Items)</p>
                    </div>
        `;
        return promotionItem;
      });

      promotionContainer.append(...promotionItems);















const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const cards = document.querySelectorAll('.card');
        
        let currentIndex = 0;
        let cardsPerView = getCardsPerView();

        function getCardsPerView() {
            if (window.innerWidth <= 640) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 20;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
            updateButtons();
        }

        function updateButtons() {
            const maxIndex = cards.length - cardsPerView;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxIndex = cards.length - cardsPerView;
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                const maxIndex = cards.length - cardsPerView;
                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }
                updateCarousel();
            }
        });

        updateButtons();










    });

fetchPromotions();
