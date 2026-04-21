const button = document.querySelector(".my-button");
button.addEventListener("click", () => {
  alert("Action was added via Query Selector!!!");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener("click", () => swiper.slideNext());
btnPrev.addEventListener("click", () => swiper.slidePrev());
