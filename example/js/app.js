const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabs);
console.log(tabContent);
console.log(tabsParent);

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

let slideImg = 0;

const autoImg = () => {
  slideImg++;
  if (slideImg >= tabs.length) {
    slideImg = 0;
  }
  hideTabContent();
  showTabContent(slideImg);
};

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        slideImg = i;
        console.log(item);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
setInterval(autoImg, 1500);

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal, "modal");
console.log(modalTrigger, " modalTrigger");
console.log(closeModalBtn, " closeModalBtn");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

onscroll = function () {
  if (
    window.scrollY + 1 >=
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  )
    openModal();
};
