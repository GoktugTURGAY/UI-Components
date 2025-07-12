"use strict";

const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const bodyEl = document.body;

btnShow.addEventListener("click", () => {
  bodyEl.classList.add("nav-rotate");
});

btnHide.addEventListener("click", () => {
  bodyEl.classList.remove("nav-rotate");
});
