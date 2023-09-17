//imports
import { imageHandler } from "./framework/elementHandler";

//global element Instantiation
let iconImage = new imageHandler("mainImage");
// let backShadow = new imageHandler(".backShadow");
const navIcons = document.querySelectorAll<HTMLElement>(".elements div");
let navImage = document.querySelector<HTMLElement>(".imageHolder");
const navBack = document.querySelector<HTMLElement>(".navContainer");
let openNav: boolean = false;
let navHeight: string = "11vh";
let navBorder: string = "10%";
// let navBlur: string = "blur(0.2em)";

// setNavTransition();
navigationNav();

//global helper variables Instantiation
// let screenWidth = screen.width;
let screenHeight = screen.height;
let imageSize = screenHeight / 2;
// let backgroundSize = imageSize + 100;

//startup operations
iconImage.resizePX(imageSize, imageSize);


function navigationNav() {
  if (navImage != null) {
    navImage.onclick = function () {
      if (navBack != null) {
        if (!openNav) {
          navHeight = "99vh";
          navBorder = "20px";
          // navBlur = "blur(1.2em)";
          showNavIcons();
        } else {
          navHeight = "82px";
          navBorder = "10%";
          // navBlur = "blur(0.5em)";
          hideNavIcons();
        }
        navBack.style.height = navHeight;
        navBack.style.borderRadius = navBorder;
        openNav = !openNav;
      }
    };
  }
}
function showNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "1";
  }
}
function hideNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "0";
  }
}

// function setNavTransition() {
//   for (let i = 0; i < navIcons.length; i++) {
//     navIcons[i].style.transition = "all " + (i + 1.1) + "s";
//     console.log(navIcons[i].style);
//     console.log(navIcons);
//   }
// }
