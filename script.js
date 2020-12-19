"use strict";

const subcategoryNavbar = document.querySelector(".subcategory-navbar");
const subcategoryDevelopment = document.querySelector("#subcategory-development");
const subcategoryBusiness = document.querySelector("#subcategory-business");

const lowerNavbarLinks = document.querySelectorAll(".nav-link-lower");

const subMenuVisible = () => subcategoryNavbar.classList.toggle("hidden");

lowerNavbarLinks.forEach(function(link){
  link.addEventListener("mouseover", function(){
    subMenuVisible();
    // document.querySelector(`${link.dataset}`)
  });
  link.addEventListener("mouseout", function(){
    subMenuVisible();
  });

})

// document.querySelector(".development-link").addEventListener("mouseover", function() {
//   subcategoryNavbar.classList.remove("hidden");
//   subcategoryDevelopment.classList.remove("hidden");
// });

// document.querySelector(".development-link").addEventListener("mouseout", function() {
//   subcategoryNavbar.classList.add("hidden");
//   subcategoryDevelopment.classList.add("hidden");
// });

// document.querySelector(".business-link").addEventListener("mouseover", function() {
//   subcategoryNavbar.classList.remove("hidden");
//   subcategoryBusiness.classList.remove("hidden");
// });

// document.querySelector(".business-link").addEventListener("mouseout", function() {
//   subcategoryNavbar.classList.add("hidden");
//   subcategoryBusiness.classList.add("hidden");
// });

