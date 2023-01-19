const plans = Array.from(document.querySelectorAll('.plan__container'));
const planSwitch = document.querySelector('.plan__switch');
const arcadePrice = document.querySelector('#arcadePrice');
const advancedPrice = document.querySelector('#advancedPrice');
const proPrice = document.querySelector('#proPrice');
const monthlyText = document.querySelector('#footerMonthly');
const yearlyText = document.querySelector('#footerYearly');
const freePlanText = Array.from(document.querySelectorAll('.plan__text--free'));

const priceProfile = document.querySelector('#priceProfile');
const priceStorage = document.querySelector('#priceStorage');
const priceOnline = document.querySelector('#priceOnline');

const addOns = Array.from(document.querySelectorAll('.addon__container'));
const resultPlan = document.querySelector('#resultPlan');
const resultPrice = document.querySelector('#resultPrice');
const resultTotal = document.querySelector('#priceTotal');
const mainResultContainer = document.querySelector('.result__container--main');

let currentPlan = 'Monthly';
let currentPlanType = 'Arcade';
let total;
const removeActivePlan = () => {
  plans.forEach((element) => {
    if (element.classList.contains('plan__container--active')) {
      element.classList.remove('plan__container--active');
    }
  });
};

const getPlanPrice = () => {
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

const getCurrentPlan = () => {
  currentPlan = planSwitch.classList.contains('plan__switch--dot--active')
    ? 'Yearly'
    : 'Monthly';
};

const setTotalText = () => {
  console.log('SET TOTAL TEXT: ', total);
  console.log(resultTotal);
  resultTotal.textContent = `+$${total}/${resultPrice.textContent.substring(
    resultPrice.textContent.length - 2
  )}`;
};

const setPlanPrices = () => {
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

const toggleFreeText = () => {
  freePlanText.forEach((element) => {
    element.classList.toggle('hidden');
  });
};
// run for init
setPlanPrices();
resultPlan.textContent = `${currentPlanType} (${currentPlan})`;

const createCheckoutRow = (title, price) => {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result__container--sub');

  const resultTextContainer = document.createElement('div');
  resultTextContainer.classList.add('result__text');

  const resultTextAddOn = document.createElement('p');
  resultTextAddOn.classList.add('result__text--addon');
  resultTextAddOn.textContent = title;

  const resultPrice = document.createElement('p');
  resultPrice.classList.add('result__price', 'result__price--sub');
  resultPrice.textContent = price;

  // appending
  resultTextContainer.append(resultTextAddOn);
  resultContainer.append(resultTextContainer);
  resultContainer.append(resultPrice);

  console.log('CREATED!!!');
  return resultContainer;
};

const removeResultRow = (title) => {
  let { children } = mainResultContainer;

  children = Array.from(children);
  children.forEach((child) => {
    if (child.firstElementChild.textContent === title) {
      child.remove();
    }
  });
};

const setActiveAddOns = () => {
  getPlanPrice();
  addOns.forEach((element) => {
    // console.log(element.firstElementChild);
    const checkbox = element.firstElementChild;
    const price = element.lastElementChild.textContent;
    const title = element.children[1].firstElementChild.textContent;

    checkbox.onclick = () => {
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
        console.log('ELEMENT PRICE', price);
        console.log('SUB', total);
        // setTotalText();
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

        console.log('ADD', total);
        console.log(price);
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

      console.log('TOTAL IN CHECKED', total);
      setTotalText();
    }
  });
};

const clearMainResultContainer = () => {
  while (mainResultContainer.firstElementChild) {
    mainResultContainer.removeChild(mainResultContainer.firstElementChild);
  }
};

planSwitch.onclick = () => {
  planSwitch.classList.toggle('plan__switch--dot--active');
  getCurrentPlan();
  setPlanPrices();
  toggleFreeText();
  clearMainResultContainer();
  setActiveAddOns();
  resultPlan.textContent = `${currentPlanType} (${currentPlan})`;
};

setActiveAddOns();

plans.forEach((element) => {
  element.onclick = () => {
    removeActivePlan();
    element.classList.add('plan__container--active');
    currentPlanType = element.lastElementChild.firstElementChild.textContent;
    const currentPlanPrice = element.lastElementChild.children[1].textContent;
    console.log(currentPlanPrice);
    resultPlan.textContent = `${currentPlanType} (${currentPlan})`;
    resultPrice.textContent = `${currentPlanPrice}`;

    getPlanPrice();
    clearMainResultContainer();
    setActiveAddOns();
    setTotalText();
  };
});

removeResultRow();
