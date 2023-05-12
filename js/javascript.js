/* Slider for hare section */
const swiper = new Swiper(".slider-main-block", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

// tabs

const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActive = null;
  let newActiveIndex = null;
  if (targetElement.closest(".tabs-deals__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActive = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
  }
  targetElement.classList.add("active");

  tabItems[currentActive].classList.remove("active");
  tabItems[newActiveIndex].classList.add("active");
});
