const figures = document.querySelectorAll(".figure");
let clickActive = true;
const removeActiveClasses = () => {
  figures.forEach((figure) => figure.classList.remove("active"));
};

figures.forEach((figure) => {
  figure.addEventListener("click", () => {
    if (clickActive) {
      removeActiveClasses();
      figure.classList.add("active");
      clickActive = false;
      setTimeout(() => clickActive = true, 1000);
    }
  });
});
