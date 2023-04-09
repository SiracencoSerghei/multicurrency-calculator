import { Notify } from 'notiflix';

import addIncomingField from './js/addIncomingField';
import { renderCountryCurrenciesWithAddition } from './js/renderCountryCurrencies';
import { convertCurrency } from './js/api-service';
// import calculateTotalConvertedAmount from './js/calculateTotalConverted';

renderCountryCurrenciesWithAddition('#currency-from');
renderCountryCurrenciesWithAddition('#currency-to');
const formEl = document.querySelector('.form');
const { amount, currencyTo, addField } = formEl.elements;
addField.addEventListener('click', addIncomingField);
addField.addEventListener('click', () => {
  renderCountryCurrenciesWithAddition('#currency-from');
});
formEl.addEventListener('submit', formHandler);
function formHandler(evt) {
  evt.preventDefault();

  calculateTotalConverted();
}
async function calculateTotalConverted() {
  const outputCurrency = document.querySelector('#currency-to');
  const currencyArr = [...document.querySelectorAll('.js-currency-from')];
  console.log('currencyArr->', currencyArr);
  const amountsArr = [...document.querySelectorAll('.amount')];
  console.log('amountsArr->', amountsArr);
  const objArr = currencyArr.map((currency, index) => {
    return { [currency.value]: amountsArr[index].value };
  });
  console.log('objArr->', objArr);
  let totalCounter = 0;
  // objArr.forEach(element => {
  //   for (let currency in element) {
  //     const data = convertCurrency(
  //       currency,
  //       outputCurrency.value,
  //       Number(element[currency])
  //     ).then(data => {
  //       return (totalCounter += data.result);
  //     });
  //   }
  // });
  //   const total = await objArr.reduce(async (acc, element) => {
  //     for (let currency in element) {
  //       const data = await convertCurrency(
  //         currency,
  //         outputCurrency.value,
  //         Number(element[currency])
  //       );
  //       acc += data.result;
  //       return acc;
  //     }
  //   }, 0);
  //   console.log('total->', total);
}
