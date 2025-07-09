const faqControls = document.querySelectorAll(".FAQ-controls");
const removeActiveClasses = () => {
  faqControls.forEach((faqControl) => {
    const FAQ = faqControl.closest(".FAQ");
    const chevronIcon = faqControl.querySelector("i");

    FAQ.classList.remove("active");
    chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  });
};

faqControls.forEach((faqControl) => {
  faqControl.addEventListener("click", () => {
    const FAQ = faqControl.closest(".FAQ");
    const chevronIcon = faqControl.querySelector("i");

    removeActiveClasses();
    FAQ.classList.add("active");
    chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
  });
});
