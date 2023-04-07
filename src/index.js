import { Notify } from 'notiflix';

import addIncomingField from './js/addIncomingField';
import { renderCountryCurrenciesWithAddition } from './js/renderCountryCurrencies';
import calculateTotalConvertedAmount from './js/calculateTotalConverted';

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
  const { currencyTo } = evt.currentTarget.elements;
  const amountsArr = document.querySelectorAll('.amount');
  let isEmpty = false;

  amountsArr.forEach(element => {
    if (element.value.trim() === '') {
      console.log('пустая строка');
      isEmpty = true;
    }
  });

  if (isEmpty) {
    Notify.warning('Fill all fields');
    return;
  }

  console.log('не пустая строка');
  calculateTotalConvertedAmount(currencyTo);
}
