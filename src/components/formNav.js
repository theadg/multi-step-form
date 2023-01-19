const forms = Array.from(document.querySelectorAll('.form'));
const formSteps = Array.from(document.querySelectorAll('.form__step'));
const goBackBtn = document.querySelector('.form__button--back');
const nextStepBtn = document.querySelector('.form__button--next');
const bottomNav = document.querySelector('.form__navigation');
const resultChange = document.querySelector('.result__text--change');

let currentForm = 0;
let currentStep = 0;

const showHideButton = () => {
  if (currentForm === 0) {
    goBackBtn.classList.add('hidden');
  } else goBackBtn.classList.remove('hidden');
};

const removeNavigation = () => {
  if (currentForm === 4) {
    bottomNav.classList.add('hidden');
  }
};

const hideForms = () => {
  forms.forEach((element) => {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
  });
};

const removeActiveSteps = () => {
  formSteps.forEach((element) => {
    if (element.classList.contains('form__step--active')) {
      element.classList.remove('form__step--active');
    }
  });
};

const showCurrentForm = () => {
  if (currentForm !== forms.length - 1) {
    showHideButton();
    hideForms();
    currentForm += 1;
    removeNavigation();
    forms[currentForm].classList.remove('hidden');
  }
};

const changeCurrentStepFoward = () => {
  if (currentStep !== forms.length - 2) {
    showHideButton();
    removeActiveSteps();
    currentStep += 1;
    formSteps[currentStep].classList.add('form__step--active');
  }
};

const changeCurrentStepBackward = () => {
  if (currentStep !== -1) {
    showHideButton();
    removeActiveSteps();
    currentStep -= 1;
    formSteps[currentStep].classList.add('form__step--active');
  }
};

const showLastForm = () => {
  if (currentForm !== 0) {
    showHideButton();
    hideForms();
    currentForm -= 1;
    removeNavigation();
    forms[currentForm].classList.remove('hidden');
  }
};
showHideButton();

nextStepBtn.onclick = () => {
  showCurrentForm();
  changeCurrentStepFoward();
};

goBackBtn.onclick = () => {
  showLastForm();
  changeCurrentStepBackward();
};

resultChange.onclick = () => {
  currentForm = 0;
  currentStep = 1;
  removeActiveSteps();
  formSteps[1].classList.add('form__step--active');
  showCurrentForm();
};
