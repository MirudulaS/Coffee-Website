var menuOpenbutton=document.querySelector("#menu-open-button");
var menuClosebutton=document.querySelector("#menu-close-button");
menuOpenbutton.addEventListener("click",()=>{
    //toggle the menu bar
    document.body.classList.toggle("menu-show");
});
menuClosebutton.addEventListener("click",()=> menuOpenbutton.click());


// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1, // Show one slide at a time
  spaceBetween: 20,
  autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});