/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/formIcons.js":
/*!*************************************!*\
  !*** ./src/components/formIcons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icon_arcade_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icon-arcade.svg */ "./src/assets/icon-arcade.svg");
/* harmony import */ var _assets_icon_advanced_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icon-advanced.svg */ "./src/assets/icon-advanced.svg");
/* harmony import */ var _assets_icon_pro_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon-pro.svg */ "./src/assets/icon-pro.svg");
/* harmony import */ var _assets_icon_thank_you_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon-thank-you.svg */ "./src/assets/icon-thank-you.svg");




document.querySelector('#arcadeImg').src = _assets_icon_arcade_svg__WEBPACK_IMPORTED_MODULE_0__;
document.querySelector('#advancedImg').src = _assets_icon_advanced_svg__WEBPACK_IMPORTED_MODULE_1__;
document.querySelector('#proImg').src = _assets_icon_pro_svg__WEBPACK_IMPORTED_MODULE_2__;
document.querySelector('#thanksImg').src = _assets_icon_thank_you_svg__WEBPACK_IMPORTED_MODULE_3__;

/***/ }),

/***/ "./src/components/formInteraction.js":
/*!*******************************************!*\
  !*** ./src/components/formInteraction.js ***!
  \*******************************************/
/***/ (() => {

var plans = Array.from(document.querySelectorAll('.plan__container'));
var planSwitch = document.querySelector('.plan__switch');
var arcadePrice = document.querySelector('#arcadePrice');
var advancedPrice = document.querySelector('#advancedPrice');
var proPrice = document.querySelector('#proPrice');
var monthlyText = document.querySelector('#footerMonthly');
var yearlyText = document.querySelector('#footerYearly');
var freePlanText = Array.from(document.querySelectorAll('.plan__text--free'));
var priceProfile = document.querySelector('#priceProfile');
var priceStorage = document.querySelector('#priceStorage');
var priceOnline = document.querySelector('#priceOnline');
var addOns = Array.from(document.querySelectorAll('.addon__container'));
var resultPlan = document.querySelector('#resultPlan');
var resultPrice = document.querySelector('#resultPrice');
var resultTotal = document.querySelector('#priceTotal');
var mainResultContainer = document.querySelector('.result__container--main');
var currentPlan = 'Monthly';
var currentPlanType = 'Arcade';
var total;
var removeActivePlan = function removeActivePlan() {
  plans.forEach(function (element) {
    if (element.classList.contains('plan__container--active')) {
      element.classList.remove('plan__container--active');
    }
  });
};
var getPlanPrice = function getPlanPrice() {
  if (currentPlan === 'Monthly') {
    switch (currentPlanType) {
      case 'Arcade':
        total = 9;
        break;
      case 'Advanced':
        total = 12;
        break;
      default:
        total = 15;
        break;
    }
  } else {
    switch (currentPlanType) {
      case 'Arcade':
        total = 90;
        break;
      case 'Advanced':
        total = 120;
        break;
      default:
        total = 150;
        break;
    }
  }
};
var getCurrentPlan = function getCurrentPlan() {
  currentPlan = planSwitch.classList.contains('plan__switch--dot--active') ? 'Yearly' : 'Monthly';
};
var setTotalText = function setTotalText() {
  resultTotal.textContent = "+$".concat(total, "/").concat(resultPrice.textContent.substring(resultPrice.textContent.length - 2));
};
var setPlanPrices = function setPlanPrices() {
  switch (currentPlan) {
    case 'Monthly':
      arcadePrice.textContent = '$9/mo';
      advancedPrice.textContent = '$12/mo';
      proPrice.textContent = '$15/mo';
      monthlyText.classList.toggle('result__price--gray');
      yearlyText.classList.toggle('result__price--gray');
      priceProfile.textContent = '+$2/mo';
      priceStorage.textContent = '+$2/mo';
      priceOnline.textContent = '+$1/mo';
      break;
    default:
      arcadePrice.textContent = '$90/yr';
      advancedPrice.textContent = '$120/yr';
      proPrice.textContent = '$150/yr';
      monthlyText.classList.toggle('result__price--gray');
      yearlyText.classList.toggle('result__price--gray');
      priceProfile.textContent = '+$20/yr';
      priceStorage.textContent = '+$20/yr';
      priceOnline.textContent = '+$10/yr';
      break;
  }
};
var toggleFreeText = function toggleFreeText() {
  freePlanText.forEach(function (element) {
    element.classList.toggle('hidden');
  });
};
// run for init
setPlanPrices();
resultPlan.textContent = "".concat(currentPlanType, " (").concat(currentPlan, ")");
var createCheckoutRow = function createCheckoutRow(title, price) {
  var resultContainer = document.createElement('div');
  resultContainer.classList.add('result__container--sub');
  var resultTextContainer = document.createElement('div');
  resultTextContainer.classList.add('result__text');
  var resultTextAddOn = document.createElement('p');
  resultTextAddOn.classList.add('result__text--addon');
  resultTextAddOn.textContent = title;
  var resultPrice = document.createElement('p');
  resultPrice.classList.add('result__price', 'result__price--sub');
  resultPrice.textContent = price;

  // appending
  resultTextContainer.append(resultTextAddOn);
  resultContainer.append(resultTextContainer);
  resultContainer.append(resultPrice);
  return resultContainer;
};
var removeResultRow = function removeResultRow(title) {
  var children = mainResultContainer.children;
  children = Array.from(children);
  children.forEach(function (child) {
    if (child.firstElementChild.textContent === title) {
      child.remove();
    }
  });
};
var setActiveAddOns = function setActiveAddOns() {
  getPlanPrice();
  addOns.forEach(function (element) {
    var checkbox = element.firstElementChild;
    var price = element.lastElementChild.textContent;
    var title = element.children[1].firstElementChild.textContent;
    checkbox.onclick = function () {
      element.classList.toggle('addon__container--active');
      // remove everything if it is unchcked
      if (!checkbox.checked) {
        // remove child
        removeResultRow(title);
        switch (currentPlan) {
          case 'Monthly':
            total -= parseInt(price.substring(3, 2), 10);
            break;
          default:
            total -= parseInt(price.substring(3, 3), 10);
            break;
        }
      } else {
        element.classList.add('addon__container--active');
        mainResultContainer.append(createCheckoutRow(title, price));
        switch (currentPlan) {
          case 'Monthly':
            total += parseInt(price.substring(3, 2), 10);
            break;
          default:
            total += parseInt(price.substring(3, 3), 10);
            break;
        }
      }
      setTotalText();
    };
    if (checkbox.checked) {
      element.classList.add('addon__container--active');
      mainResultContainer.append(createCheckoutRow(title, price));
      switch (currentPlan) {
        case 'Monthly':
          total += parseInt(price.substring(3, 2), 10);
          break;
        default:
          total += parseInt(price.substring(3, 3), 10);
          break;
      }
      setTotalText();
    }
  });
};
var clearMainResultContainer = function clearMainResultContainer() {
  while (mainResultContainer.firstElementChild) {
    mainResultContainer.removeChild(mainResultContainer.firstElementChild);
  }
};
planSwitch.onclick = function () {
  planSwitch.classList.toggle('plan__switch--dot--active');
  getCurrentPlan();
  setPlanPrices();
  toggleFreeText();
  clearMainResultContainer();
  setActiveAddOns();
  resultPlan.textContent = "".concat(currentPlanType, " (").concat(currentPlan, ")");
};
setActiveAddOns();
plans.forEach(function (element) {
  element.onclick = function () {
    removeActivePlan();
    element.classList.add('plan__container--active');
    currentPlanType = element.lastElementChild.firstElementChild.textContent;
    var currentPlanPrice = element.lastElementChild.children[1].textContent;
    resultPlan.textContent = "".concat(currentPlanType, " (").concat(currentPlan, ")");
    resultPrice.textContent = "".concat(currentPlanPrice);
    getPlanPrice();
    clearMainResultContainer();
    setActiveAddOns();
    setTotalText();
  };
});
removeResultRow();

/***/ }),

/***/ "./src/components/formNav.js":
/*!***********************************!*\
  !*** ./src/components/formNav.js ***!
  \***********************************/
/***/ (() => {

var forms = Array.from(document.querySelectorAll('.form'));
var formSteps = Array.from(document.querySelectorAll('.form__step'));
var goBackBtn = document.querySelector('.form__button--back');
var nextStepBtn = document.querySelector('.form__button--next');
var bottomNav = document.querySelector('.form__navigation');
var resultChange = document.querySelector('.result__text--change');
var formInputRows = Array.from(document.querySelectorAll('.form__input--row'));
var currentForm = 0;
var currentStep = 0;
var showHideButton = function showHideButton() {
  if (currentForm === 0) {
    goBackBtn.classList.add('hidden');
  } else goBackBtn.classList.remove('hidden');
};
var removeNavigation = function removeNavigation() {
  if (currentForm === 4) {
    bottomNav.classList.add('hidden');
  }
};
var hideForms = function hideForms() {
  forms.forEach(function (element) {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
  });
};
var removeActiveSteps = function removeActiveSteps() {
  formSteps.forEach(function (element) {
    if (element.classList.contains('form__step--active')) {
      element.classList.remove('form__step--active');
    }
  });
};
var validateFields = function validateFields() {
  var valid = false;
  formInputRows.forEach(function (row) {
    var formHeader = row.firstElementChild;
    var formError = formHeader.lastElementChild;
    var formInput = row.lastElementChild;
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
var showCurrentForm = function showCurrentForm() {
  if (currentForm !== forms.length - 1) {
    if (currentForm === 0) {
      var valid = validateFields();
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
var changeCurrentStepForward = function changeCurrentStepForward() {
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
var changeCurrentStepBackward = function changeCurrentStepBackward() {
  if (currentStep !== -1) {
    showHideButton();
    removeActiveSteps();
    currentStep -= 1;
    formSteps[currentStep].classList.add('form__step--active');
  }
};
var showLastForm = function showLastForm() {
  if (currentForm !== 0) {
    showHideButton();
    hideForms();
    currentForm -= 1;
    removeNavigation();
    forms[currentForm].classList.remove('hidden');
  }
};
var updateNextStepButton = function updateNextStepButton() {
  if (currentForm === formSteps.length - 1) {
    nextStepBtn.textContent = 'Confirm';
    nextStepBtn.classList.add('form__button--confirm');
  }
};
showHideButton();
nextStepBtn.onclick = function () {
  showCurrentForm();
  changeCurrentStepForward();
  updateNextStepButton();
};
goBackBtn.onclick = function () {
  showLastForm();
  changeCurrentStepBackward();
};
resultChange.onclick = function () {
  currentForm = 0;
  currentStep = 1;
  removeActiveSteps();
  formSteps[1].classList.add('form__step--active');
  showCurrentForm();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-sidebar-mobile.svg */ "./src/assets/bg-sidebar-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-sidebar-desktop.svg */ "./src/assets/bg-sidebar-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n.container {\n  background-color: hsl(217deg, 100%, 97%);\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 87px 0.5fr repeat(3, 1fr);\n}\n.container__image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 175px;\n}\n.container__content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-row: 2/6;\n  justify-items: center;\n}\n\n.form {\n  padding: 35px 25px;\n  display: grid;\n  gap: 26px;\n}\n.form__step {\n  height: 30px;\n  width: 30px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid hsl(0deg, 0%, 100%);\n  color: hsl(0deg, 0%, 100%);\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 14px;\n}\n.form__step--container {\n  display: flex;\n  gap: 16px;\n  margin: 0 auto;\n  padding-top: 30px;\n  width: min-content;\n}\n.form__step--active {\n  color: hsl(213deg, 96%, 18%);\n  background-color: hsl(206deg, 94%, 87%);\n  border-color: hsl(206deg, 94%, 87%);\n}\n.form__container {\n  height: fit-content;\n  width: 90%;\n  background-color: white;\n  webkit-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n  -moz-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n  box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n  border-radius: 16px;\n  grid-row: 1/5;\n}\n.form__navigation {\n  background-color: hsl(0deg, 0%, 100%);\n  height: 70px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-end;\n  padding: 16px;\n  grid-row: 5;\n  margin-top: auto;\n}\n.form__button {\n  background-color: hsl(213deg, 96%, 18%);\n  color: hsl(206deg, 94%, 87%);\n  font-weight: 400;\n  height: min-content;\n  padding: 12px;\n  border-radius: 6px;\n}\n.form__button:hover {\n  cursor: pointer;\n}\n.form__button--back {\n  margin-right: auto;\n  color: hsl(231deg, 11%, 63%);\n}\n.form__button--back:hover {\n  cursor: pointer;\n  color: hsl(213deg, 96%, 18%);\n}\n.form__button--confirm {\n  background-color: hsl(243deg, 100%, 62%);\n}\n.form__button--confirm:hover {\n  opacity: 0.7;\n}\n.form__text--title {\n  color: hsl(213deg, 96%, 18%);\n  font-size: 26px;\n}\n.form__text--subtitle {\n  color: hsl(231deg, 11%, 63%);\n  font-weight: 400;\n  font-size: 18px;\n}\n.form__header {\n  display: grid;\n  gap: 16px;\n}\n.form__body {\n  display: grid;\n  gap: 16px;\n}\n.form__input {\n  font-family: \"Ubuntu\", sans-serif;\n  padding: 16px;\n  appearance: none;\n  border: none;\n  outline: none;\n  border: 1px solid hsl(229deg, 24%, 87%);\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 16px;\n}\n.form__input--row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form__input:focus {\n  border-color: hsl(213deg, 96%, 18%);\n}\n.form__input--errorBorder {\n  border-color: hsl(354deg, 84%, 57%);\n}\n.form__input--label {\n  color: hsl(213deg, 96%, 18%);\n}\n.form__input--error {\n  color: hsl(354deg, 84%, 57%);\n}\n.form__input--header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.hidden {\n  display: none;\n}\n\n.plan__container {\n  display: flex;\n  padding: 16px;\n  gap: 16px;\n  border: 1px solid hsl(229deg, 24%, 87%);\n  border-radius: 8px;\n}\n.plan__container--active {\n  border-color: hsl(243deg, 100%, 62%);\n  background-color: rgb(248, 249, 254);\n}\n.plan__container:hover {\n  border-color: hsl(243deg, 100%, 62%);\n  cursor: pointer;\n}\n.plan__icon {\n  margin-bottom: auto;\n  height: 36px;\n  width: 36px;\n}\n.plan__text {\n  display: grid;\n  gap: 6px;\n}\n.plan__text--small {\n  font-size: 14px;\n}\n.plan__text--title {\n  color: hsl(213deg, 96%, 18%);\n  font-weight: 700;\n}\n.plan__text--price {\n  color: hsl(231deg, 11%, 63%);\n}\n.plan__text--fee {\n  color: hsl(213deg, 96%, 18%);\n}\n.plan__bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 22px;\n  height: 45px;\n  border-radius: 8px;\n  background-color: rgb(248, 249, 254);\n}\n.plan__switch {\n  width: 35px;\n  height: 20px;\n  background-color: hsl(213deg, 96%, 18%);\n  border-radius: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  padding: 2px 5px;\n}\n.plan__switch--dot {\n  height: 12px;\n  width: 12px;\n  background-color: white;\n  border-radius: 16px;\n}\n.plan__switch--dot--active {\n  justify-content: flex-end;\n}\n\n.addon__container {\n  height: 60px;\n  display: grid;\n  padding: 16px;\n  gap: 16px;\n  grid-auto-flow: column;\n  align-items: center;\n  border: 1px solid hsl(229deg, 24%, 87%);\n  border-radius: 8px;\n}\n.addon__container--active {\n  border-color: hsl(243deg, 100%, 62%);\n  background-color: rgb(248, 249, 254);\n}\n.addon__container:hover {\n  border-color: hsl(243deg, 100%, 62%);\n  cursor: pointer;\n}\n.addon__checkbox {\n  height: 18px;\n  width: 18px;\n}\n.addon__checkbox:checked {\n  accent-color: hsl(243deg, 100%, 62%);\n}\n.addon__text--head {\n  color: hsl(213deg, 96%, 18%);\n}\n.addon__text--sub {\n  font-size: 12px;\n  color: hsl(231deg, 11%, 63%);\n}\n.addon__text--price {\n  color: hsl(243deg, 100%, 62%);\n  font-size: 14px;\n}\n\n.result__container {\n  display: grid;\n  background-color: rgb(248, 249, 254);\n  border-radius: 8px;\n  padding: 36px 20px;\n  gap: 16px;\n}\n.result__container--sub {\n  display: flex;\n  justify-content: space-between;\n}\n.result__text--change {\n  border: none;\n  background: none;\n  appearance: none;\n  text-decoration: underline;\n  color: hsl(231deg, 11%, 63%);\n}\n.result__text--change:hover {\n  color: hsl(243deg, 100%, 62%);\n  cursor: pointer;\n}\n.result__text--addon, .result__text--total {\n  color: hsl(231deg, 11%, 63%);\n  font-weight: 400;\n}\n.result__price {\n  font-weight: 700;\n  color: hsl(213deg, 96%, 18%);\n  font-size: 14px;\n}\n.result__price--sub {\n  font-weight: 400;\n}\n.result__price--final {\n  color: hsl(243deg, 100%, 62%);\n}\n.result__price--gray {\n  color: hsl(231deg, 11%, 63%);\n}\n.result__footer {\n  padding: 0 20px;\n}\n\n.final__container {\n  padding: 65px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n}\n.final__text--body {\n  text-align: center;\n  color: hsl(231deg, 11%, 63%);\n}\n\n@media screen and (min-width: 800px) {\n  body {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: hsl(217deg, 100%, 97%);\n  }\n  .container {\n    width: min(80vw, 940px);\n    height: 600px;\n    display: flex;\n    background-color: white;\n    border-radius: 8px;\n    padding: 16px;\n    webkit-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n    -moz-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n    box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\n  }\n  .container__image {\n    min-width: min(275px, 40%);\n    height: 570px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border-radius: 8px;\n  }\n  .container__content {\n    width: max(100%, 30vw);\n  }\n  .form__step {\n    height: 35px;\n    width: 35px;\n  }\n  .form__step--container {\n    flex-direction: column;\n    padding-left: 30px;\n    gap: 32px;\n  }\n  .form__step--container--row {\n    width: max-content;\n  }\n  .form__step--main--container {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 0.5fr 0.25fr;\n    padding-top: 20px;\n  }\n  .form__step--row {\n    height: 35px;\n  }\n  .form__step--title {\n    color: hsl(229deg, 24%, 87%);\n    font-size: 12 px;\n  }\n  .form__step--desc {\n    color: hsl(0deg, 0%, 100%);\n    font-weight: 700;\n  }\n  .form__container {\n    box-shadow: none;\n    height: 100% !important;\n  }\n  .form__body--column {\n    grid-auto-flow: column;\n  }\n  .form__navigation {\n    padding: 0 55px;\n  }\n  .form__button {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    width: 125px;\n    height: 50px;\n  }\n  .plan__container {\n    height: 160px;\n    width: 140px;\n    flex-direction: column;\n  }\n  .plan__icon {\n    height: 38px;\n    width: 38px;\n  }\n  .addon__container {\n    padding: 24px;\n    height: auto;\n    grid-auto-columns: 0.01fr 0.85fr 0.15fr;\n  }\n  .addon__checkbox {\n    height: 21px;\n    width: 21px;\n    border-radius: 8px;\n  }\n  .addon__text--head {\n    font-size: 18px;\n  }\n  .addon__text--sub, .addon__text--price {\n    font-size: 16px;\n  }\n  .result__price--final {\n    font-size: 18px;\n    font-weight: 700;\n  }\n  .result__container--main {\n    display: grid;\n    gap: 23px;\n  }\n  .form__final {\n    height: 100%;\n  }\n  .final__icon {\n    height: 80px;\n    width: 80px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"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","sourcesContent":["@import './vars.scss';\r\n\r\n@mixin flexCenter() {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin hoverCursor() {\r\n  cursor: pointer;\r\n}\r\n@mixin hoverEffect() {\r\n  border-color: $color-primary-blue-purple;\r\n  @include hoverCursor();\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: $font-family;\r\n}\r\n\r\n// Mobile first Development\r\n\r\n.container {\r\n  background-color: $color-neutral-alabaster;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-rows: 87px 0.5fr repeat(3, 1fr);\r\n\r\n  &__image {\r\n    background-image: url('../assets/bg-sidebar-mobile.svg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 175px;\r\n  }\r\n\r\n  &__content {\r\n    // height: 375px;\r\n    // width: 375px;\r\n    height: 100%;\r\n    width: 100%;\r\n    // border: 1px solid red;\r\n\r\n    display: grid;\r\n    grid-row: 2 / 6;\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n.form {\r\n  padding: 35px 25px;\r\n  display: grid;\r\n  gap: 26px;\r\n  &__step {\r\n    // padding: 6px 10px;\r\n    height: 30px;\r\n    width: 30px;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid $color-white;\r\n    color: $color-white;\r\n    border-radius: 50%;\r\n    font-weight: $font-weight-bold;\r\n    font-size: 14px;\r\n\r\n    &--container {\r\n      display: flex;\r\n      gap: 16px;\r\n\r\n      margin: 0 auto;\r\n      padding-top: 30px;\r\n      width: min-content;\r\n    }\r\n\r\n    &--active {\r\n      color: $color-primary-blue-marine;\r\n      background-color: $color-primary-blue-light;\r\n      border-color: $color-primary-blue-light;\r\n    }\r\n  }\r\n\r\n  &__container {\r\n    height: fit-content;\r\n    width: 90%;\r\n    background-color: white;\r\n\r\n    webkit-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n    -moz-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n    box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n    border-radius: 16px;\r\n\r\n    grid-row: 1 / 5;\r\n  }\r\n\r\n  &__navigation {\r\n    // background-color: red;\r\n    background-color: $color-white;\r\n    height: 70px;\r\n    width: 100%;\r\n    @include flexCenter();\r\n    justify-content: flex-end;\r\n    padding: 16px;\r\n\r\n    grid-row: 5;\r\n\r\n    margin-top: auto;\r\n  }\r\n\r\n  &__button {\r\n    background-color: $color-primary-blue-marine;\r\n    color: $color-primary-blue-light;\r\n    font-weight: $font-weight-regular;\r\n    height: min-content;\r\n    padding: 12px;\r\n    border-radius: 6px;\r\n\r\n    &:hover {\r\n      @include hoverCursor();\r\n    }\r\n\r\n    &--back {\r\n      margin-right: auto;\r\n      color: $color-neutral-gray-cool;\r\n\r\n      &:hover {\r\n        @include hoverCursor();\r\n        color: $color-primary-blue-marine;\r\n      }\r\n    }\r\n\r\n    &--confirm {\r\n      background-color: $color-primary-blue-purple;\r\n\r\n      &:hover {\r\n        opacity: 0.7;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    &--title {\r\n      color: $color-primary-blue-marine;\r\n      font-size: 26px;\r\n    }\r\n\r\n    &--subtitle {\r\n      color: $color-neutral-gray-cool;\r\n      font-weight: $font-weight-regular;\r\n      font-size: calc($font-size + 2px);\r\n    }\r\n  }\r\n\r\n  &__header {\r\n    display: grid;\r\n    gap: 16px;\r\n  }\r\n  &__body {\r\n    display: grid;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__input {\r\n    font-family: $font-family;\r\n    padding: 16px;\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    border: 1px solid $color-neutral-gray-light;\r\n    border-radius: 4px;\r\n    font-weight: $font-weight-medium;\r\n    font-size: $font-size;\r\n\r\n    &--row {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 6px;\r\n    }\r\n\r\n    &:focus {\r\n      border-color: $color-primary-blue-marine;\r\n    }\r\n\r\n    &--errorBorder {\r\n      border-color: $color-primary-red-strawberry;\r\n    }\r\n    &--label {\r\n      color: $color-primary-blue-marine;\r\n    }\r\n\r\n    &--error {\r\n      color: $color-primary-red-strawberry;\r\n    }\r\n\r\n    &--header {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.plan {\r\n  &__container {\r\n    display: flex;\r\n    padding: 16px;\r\n    gap: 16px;\r\n\r\n    border: 1px solid $color-neutral-gray-light;\r\n    border-radius: 8px;\r\n\r\n    &--active {\r\n      border-color: $color-primary-blue-purple;\r\n      background-color: rgb(248, 249, 254);\r\n    }\r\n\r\n    &:hover {\r\n      @include hoverEffect();\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    margin-bottom: auto;\r\n    height: 36px;\r\n    width: 36px;\r\n  }\r\n\r\n  &__text {\r\n    display: grid;\r\n    gap: 6px;\r\n\r\n    &--small {\r\n      font-size: 14px;\r\n    }\r\n\r\n    &--title {\r\n      color: $color-primary-blue-marine;\r\n      font-weight: $font-weight-bold;\r\n    }\r\n\r\n    &--price {\r\n      color: $color-neutral-gray-cool;\r\n    }\r\n    &--fee {\r\n      color: $color-primary-blue-marine;\r\n    }\r\n  }\r\n\r\n  &__bar {\r\n    @include flexCenter();\r\n    gap: 22px;\r\n    height: 45px;\r\n    border-radius: 8px;\r\n    background-color: rgb(248, 249, 254);\r\n  }\r\n\r\n  &__switch {\r\n    width: 35px;\r\n    height: 20px;\r\n    background-color: $color-primary-blue-marine;\r\n    border-radius: 40px;\r\n    @include flexCenter();\r\n\r\n    justify-content: flex-start;\r\n    padding: 2px 5px;\r\n    &--dot {\r\n      height: 12px;\r\n      width: 12px;\r\n      background-color: white;\r\n      border-radius: 16px;\r\n\r\n      &--active {\r\n        justify-content: flex-end;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.addon {\r\n  &__container {\r\n    height: 60px;\r\n    display: grid;\r\n    padding: 16px;\r\n    gap: 16px;\r\n\r\n    grid-auto-flow: column;\r\n    align-items: center;\r\n\r\n    border: 1px solid $color-neutral-gray-light;\r\n    border-radius: 8px;\r\n\r\n    &--active {\r\n      border-color: $color-primary-blue-purple;\r\n      background-color: rgb(248, 249, 254);\r\n    }\r\n\r\n    &:hover {\r\n      @include hoverEffect();\r\n    }\r\n  }\r\n\r\n  &__checkbox {\r\n    height: 18px;\r\n    width: 18px;\r\n\r\n    &:checked {\r\n      accent-color: $color-primary-blue-purple;\r\n    }\r\n  }\r\n  &__text {\r\n    &--head {\r\n      color: $color-primary-blue-marine;\r\n    }\r\n\r\n    &--sub {\r\n      font-size: 12px;\r\n      color: $color-neutral-gray-cool;\r\n    }\r\n\r\n    &--price {\r\n      color: $color-primary-blue-purple;\r\n      font-size: 14px;\r\n    }\r\n  }\r\n}\r\n\r\n.result {\r\n  &__container {\r\n    display: grid;\r\n    background-color: rgb(248, 249, 254);\r\n    border-radius: 8px;\r\n    padding: 36px 20px;\r\n    gap: 16px;\r\n    &--sub {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    &--change {\r\n      border: none;\r\n      background: none;\r\n      appearance: none;\r\n      text-decoration: underline;\r\n      color: $color-neutral-gray-cool;\r\n\r\n      &:hover {\r\n        color: $color-primary-blue-purple;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n\r\n    &--addon,\r\n    &--total {\r\n      color: $color-neutral-gray-cool;\r\n      font-weight: $font-weight-regular;\r\n    }\r\n  }\r\n\r\n  &__price {\r\n    font-weight: $font-weight-bold;\r\n    color: $color-primary-blue-marine;\r\n    font-size: 14px;\r\n\r\n    &--sub {\r\n      font-weight: $font-weight-regular;\r\n    }\r\n\r\n    &--final {\r\n      color: $color-primary-blue-purple;\r\n    }\r\n\r\n    &--gray {\r\n      color: $color-neutral-gray-cool;\r\n    }\r\n  }\r\n  &__footer {\r\n    padding: 0 20px;\r\n  }\r\n}\r\n\r\n.final {\r\n  &__container {\r\n    padding: 65px 10px;\r\n    @include flexCenter();\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__text {\r\n    &--body {\r\n      text-align: center;\r\n      color: $color-neutral-gray-cool;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  body {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    @include flexCenter();\r\n    background-color: $color-neutral-alabaster;\r\n  }\r\n  .container {\r\n    width: min(80vw, 940px);\r\n    height: 600px;\r\n    display: flex;\r\n\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    padding: 16px;\r\n\r\n    webkit-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n    -moz-box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n    box-shadow: -2px 11px 28px -7px rgba(143, 146, 161, 0.64);\r\n\r\n    &__image {\r\n      min-width: min(275px, 40%);\r\n      height: 570px;\r\n      background-image: url('../assets/bg-sidebar-desktop.svg');\r\n      border-radius: 8px;\r\n    }\r\n\r\n    &__content {\r\n      width: max(100%, 30vw);\r\n    }\r\n  }\r\n\r\n  .form {\r\n    &__step {\r\n      height: 35px;\r\n      width: 35px;\r\n      &--container {\r\n        flex-direction: column;\r\n        padding-left: 30px;\r\n        gap: 32px;\r\n\r\n        &--row {\r\n          width: max-content;\r\n        }\r\n      }\r\n\r\n      &--main--container {\r\n        display: grid;\r\n        grid-auto-flow: column;\r\n        grid-template-columns: 0.5fr 0.25fr;\r\n        padding-top: 20px;\r\n      }\r\n\r\n      &--row {\r\n        height: 35px;\r\n      }\r\n      &--title {\r\n        color: $color-neutral-gray-light;\r\n        font-size: 12 px;\r\n      }\r\n\r\n      &--desc {\r\n        color: $color-white;\r\n        font-weight: $font-weight-bold;\r\n      }\r\n    }\r\n\r\n    &__container {\r\n      box-shadow: none;\r\n      height: 100% !important;\r\n    }\r\n\r\n    &__body {\r\n      &--column {\r\n        grid-auto-flow: column;\r\n      }\r\n    }\r\n\r\n    &__navigation {\r\n      padding: 0 55px;\r\n    }\r\n\r\n    &__button {\r\n      display: grid;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 125px;\r\n      height: 50px;\r\n    }\r\n  }\r\n\r\n  .plan {\r\n    &__container {\r\n      height: 160px;\r\n      width: 140px;\r\n\r\n      flex-direction: column;\r\n    }\r\n\r\n    &__icon {\r\n      height: 38px;\r\n      width: 38px;\r\n    }\r\n  }\r\n\r\n  .addon {\r\n    &__container {\r\n      padding: 24px;\r\n      height: auto;\r\n\r\n      grid-auto-columns: 0.01fr 0.85fr 0.15fr;\r\n    }\r\n\r\n    &__checkbox {\r\n      height: 21px;\r\n      width: 21px;\r\n      border-radius: 8px;\r\n    }\r\n\r\n    &__text {\r\n      &--head {\r\n        font-size: 18px;\r\n      }\r\n      &--sub,\r\n      &--price {\r\n        font-size: $font-size;\r\n      }\r\n    }\r\n  }\r\n\r\n  .result {\r\n    &__price {\r\n      &--final {\r\n        font-size: 18px;\r\n        font-weight: $font-weight-bold;\r\n      }\r\n    }\r\n\r\n    &__container--main {\r\n      display: grid;\r\n      gap: 23px;\r\n    }\r\n  }\r\n\r\n  .form {\r\n    &__final {\r\n      height: 100%;\r\n    }\r\n  }\r\n  .final {\r\n    &__icon {\r\n      height: 80px;\r\n      width: 80px;\r\n    }\r\n  }\r\n}\r\n\r\n// TODO: fix responsiveness\r\n\r\n// TODO: create readme - 10 mins\r\n// TODO: update linkedin - 10 mins\r\n","// Colors\r\n// Primary\r\n$color-primary-blue-marine: hsl(213, 96%, 18%);\r\n$color-primary-blue-purple: hsl(243, 100%, 62%);\r\n$color-primary-blue-pastel: hsl(228, 100%, 84%);\r\n$color-primary-blue-light: hsl(206, 94%, 87%);\r\n$color-primary-red-strawberry: hsl(354, 84%, 57%);\r\n// Secondary\r\n$color-neutral-gray-cool: hsl(231, 11%, 63%);\r\n$color-neutral-gray-light: hsl(229, 24%, 87%);\r\n$color-neutral-alabaster: hsl(217, 100%, 97%);\r\n$color-white: hsl(0, 0%, 100%);\r\n\r\n// Font\r\n// Size\r\n$font-size: 16px;\r\n// Family\r\n$font-family: 'Ubuntu', sans-serif;\r\n// Weight\r\n$font-weight-regular: 400;\r\n$font-weight-medium: 500;\r\n$font-weight-bold: 700;\r\n\r\n$border-radius: 16px;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bg-sidebar-desktop.svg":
/*!*******************************************!*\
  !*** ./src/assets/bg-sidebar-desktop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-sidebar-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-sidebar-mobile.svg":
/*!******************************************!*\
  !*** ./src/assets/bg-sidebar-mobile.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-sidebar-mobile.svg";

/***/ }),

/***/ "./src/assets/icon-advanced.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-advanced.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-advanced.svg";

/***/ }),

/***/ "./src/assets/icon-arcade.svg":
/*!************************************!*\
  !*** ./src/assets/icon-arcade.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-arcade.svg";

/***/ }),

/***/ "./src/assets/icon-pro.svg":
/*!*********************************!*\
  !*** ./src/assets/icon-pro.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-pro.svg";

/***/ }),

/***/ "./src/assets/icon-thank-you.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-thank-you.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-thank-you.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_formNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formNav */ "./src/components/formNav.js");
/* harmony import */ var _components_formNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_formNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_formInteraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/formInteraction */ "./src/components/formInteraction.js");
/* harmony import */ var _components_formInteraction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_formInteraction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_formIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formIcons */ "./src/components/formIcons.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map