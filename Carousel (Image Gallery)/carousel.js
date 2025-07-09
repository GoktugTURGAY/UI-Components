const figures = document.querySelectorAll(".figure");
const removeActiveClasses = () => {
  figures.forEach((figure) => figure.classList.remove("active"));
};

figures.forEach((figure) => {
  figure.addEventListener("click", () => {
    removeActiveClasses();
    figure.classList.add("active");
  });
});
