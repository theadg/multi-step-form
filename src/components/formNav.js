const forms = Array.from(document.querySelectorAll('.form'));
const formSteps = Array.from(document.querySelectorAll('.form__step'));
const goBackBtn = document.querySelector('.form__button--back');
const nextStepBtn = document.querySelector('.form__button--next');
const bottomNav = document.querySelector('.form__navigation');
const resultChange = document.querySelector('.result__text--change');

const formInputRows = Array.from(
  document.querySelectorAll('.form__input--row')
);

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

const validateFields = () => {
  let valid = false;
  formInputRows.forEach((row) => {
    const formHeader = row.firstElementChild;
    const formError = formHeader.lastElementChild;
    const formInput = row.lastElementChild;

    if (formInput.value.length === 0) {
      formError.classList.remove('hidden');
      formInput.classList.add('form__input--errorBorder');
      valid = false;
    } else {
      valid = true;
    }
  });

  return valid;
};

const showCurrentForm = () => {
  if (currentForm !== forms.length - 1) {
    if (currentForm === 0) {
      const valid = validateFields();
      if (valid) {
        showHideButton();
        hideForms();
        currentForm += 1;
        removeNavigation();
        forms[currentForm].classList.remove('hidden');
      }
    } else {
      showHideButton();
      hideForms();
      currentForm += 1;
      removeNavigation();
      forms[currentForm].classList.remove('hidden');
    }
  }
};

const changeCurrentStepForward = () => {
  if (currentStep !== formSteps.length - 2) {
    if (currentStep === 0) {
      validateFields();
      if (validateFields() === true) {
        showHideButton();
        removeActiveSteps();
        currentStep += 1;
        formSteps[currentStep].classList.add('form__step--active');
      }
    } else {
      showHideButton();
      removeActiveSteps();
      currentStep += 1;
      formSteps[currentStep].classList.add('form__step--active');
    }
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

const updateNextStepButton = () => {
  if (currentForm === formSteps.length - 1) {
    nextStepBtn.textContent = 'Confirm';
    nextStepBtn.classList.add('form__button--confirm');
  }
};
showHideButton();

nextStepBtn.onclick = () => {
  showCurrentForm();
  changeCurrentStepForward();
  updateNextStepButton();
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
