let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isburgerOpen = false;

burgerBtn.onclick = function () {
  if (!isburgerOpen) {
    burgerMenu.style.display = "block";
    burgerMenu.style.backgroundPosition = "center, left 50% center";
    isburgerOpen = true;
  } else {
    burgerMenu.style.display = "none";
    burgerMenu.style.backgroundPosition = "center, center left 50%";
    isburgerOpen = false;
  }
};
