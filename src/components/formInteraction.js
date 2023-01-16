const plans = Array.from(document.querySelectorAll('.plan__container'));
const planSwitch = document.querySelector('.plan__switch');
const arcadePrice = document.querySelector('#arcadePrice');
const advancedPrice = document.querySelector('#advancedPrice');
const proPrice = document.querySelector('#proPrice');
const monthlyText = document.querySelector('#footerMonthly');
const yearlyText = document.querySelector('#footerYearly');
const freePlanText = Array.from(document.querySelectorAll('.plan__text--free'));
let currentPlan = 'Monthly';
const removeActivePlan = () => {
  plans.forEach((element) => {
    if (element.classList.contains('plan__container--active')) {
      element.classList.remove('plan__container--active');
    }
  });
};

plans.forEach((element) => {
  element.onclick = () => {
    removeActivePlan();
    element.classList.add('plan__container--active');
  };
});

const getCurrentPlan = () => {
  currentPlan = planSwitch.classList.contains('plan__switch--dot--active')
    ? 'Yearly'
    : 'Monthly';
};

const setPlanPrices = () => {
  switch (currentPlan) {
    case 'Monthly':
      arcadePrice.textContent = '$9/mo';
      advancedPrice.textContent = '$12/mo';
      proPrice.textContent = '$15/mo';
      monthlyText.classList.toggle('result__price--gray');
      yearlyText.classList.toggle('result__price--gray');
      break;
    default:
      arcadePrice.textContent = '$90/yr';
      advancedPrice.textContent = '$120/yr';
      proPrice.textContent = '$150/yr';
      monthlyText.classList.toggle('result__price--gray');
      yearlyText.classList.toggle('result__price--gray');

      break;
  }
};

const toggleFreeText = () => {
  freePlanText.forEach((element) => {
    element.classList.toggle('hidden');
  });
};
setPlanPrices();

planSwitch.onclick = () => {
  planSwitch.classList.toggle('plan__switch--dot--active');
  getCurrentPlan();
  setPlanPrices();
  toggleFreeText();
};

// addOnClickPlan();
