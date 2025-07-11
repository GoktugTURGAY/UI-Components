const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const progressSteps = document.querySelectorAll(".progress-step");
const progressIcons = document.querySelectorAll(".progress-icon");
const progressTexts = document.querySelectorAll(".progress-text");
const progressStepsLength = progressSteps.length;
const progress = document.querySelector("#progress");
let currentStep = 1;

const handleButtons = () => {
  if (currentStep === 1) {
    btnPrev.disabled = true;
  } else if (currentStep === progressStepsLength) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
};

const handleClasses = (item, index) => {
  if (index < currentStep) {
    item.classList.add("active");
  } else if (index > currentStep - 1) {
    item.classList.remove("active");
  }

  handleButtons();
};

const updateUI = () => {
  progressSteps.forEach(handleClasses);
  progressIcons.forEach(handleClasses);
  progressTexts.forEach(handleClasses);
  progress.style.width =
    ((currentStep - 1) / (progressStepsLength - 1)) * 100 + "%";
};

const handleClick = (e) => {
  const targetBtn = e.target;

  if (targetBtn === btnNext) {
    currentStep > progressStepsLength
      ? (currentStep = progressStepsLength)
      : currentStep++;
    updateUI();
  } else if (targetBtn === btnPrev) {
    currentStep < 1 ? (currentStep = 1) : currentStep--;
    updateUI();
  }
};

btnNext.addEventListener("click", handleClick);
btnPrev.addEventListener("click", handleClick);
