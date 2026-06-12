// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


// Navbar Menu

let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

  let dropdown = item.querySelector("ul");

  if (dropdown) {

    let hideTimeout;

    item.addEventListener("mouseenter", () => {

      clearTimeout(hideTimeout);

      dropdown.classList.remove("d-none");

      setTimeout(() => {
        dropdown.classList.add("show-menu");
      }, 10);

    });

    item.addEventListener("mouseleave", () => {

      hideTimeout = setTimeout(() => {

        dropdown.classList.remove("show-menu");

        setTimeout(() => {
          dropdown.classList.add("d-none");
        }, 300);

      }, 100);

    });

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
    });

  }

});


// Fixed Header

window.addEventListener("scroll", function () {

   let navbar = document.querySelector(".custom-nav");
   let navItems = document.querySelector("#nav-items");

   if(window.scrollY > 200){

      navbar.classList.add("fixed-nav");
      if(!document.querySelector(".nav-logo")){

         let img = document.createElement("img");

         img.src = "./assets/logos/fiama-logo.webp";
         img.classList.add("nav-logo");

         navItems.prepend(img);
      }
   }
   else{
      navbar.classList.remove("fixed-nav");

      let logo = document.querySelector(".nav-logo");

      if(logo){
         logo.remove();
      }
   }
});


// Shop View Change Button

let buttons = document.querySelectorAll(".view-btn");
        buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => {
            b.classList.remove("active");
            });
            btn.classList.add("active");
    });
});


// GRID AND LIST 

const allProducts = document.querySelectorAll(".shop-grid-products");
const listProducts = document.querySelectorAll(".shop-list-products");

const gridBtn = document.getElementById("shopGridBtn");
const listBtn = document.getElementById("shopListBtn");

if(gridBtn && gridBtn.classList.contains("active")){

  listProducts.forEach((item)=>{
    item.style.display = "none";
  });
}

// GRID VIEW
if (gridBtn) {
  gridBtn.addEventListener("click", () => {
    allProducts.forEach((item) => {
      item.style.display = "block";
    });

    listProducts.forEach((item) => {
      item.style.display = "none";
    });
  });
}

// LIST VIEW
if (gridBtn) {
listBtn.addEventListener("click", () => {
  allProducts.forEach((item) => {
    item.style.display = "none";
  });

  // Hide extra products
  listProducts.forEach((item) => {
    item.style.display = "block";
  });

});
}

// Quantity Counter

document.addEventListener("DOMContentLoaded", () => {

const qtyInputs = document.querySelectorAll(".cartItemQty");
const plusBtns = document.querySelectorAll(".cartPlus");
const minusBtns = document.querySelectorAll(".cartMinus");

    plusBtns.forEach((plus, index) => {
      plus.addEventListener("click", () => {
        qtyInputs[index].value = Number(qtyInputs[index].value) + 1;
      });
    });

    minusBtns.forEach((minus, index) => {
      minus.addEventListener("click", () => {
        if (Number(qtyInputs[index].value) > 1) {
          qtyInputs[index].value = Number(qtyInputs[index].value) - 1;
        }
      });
    });

});

