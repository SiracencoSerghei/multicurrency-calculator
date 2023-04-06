import { Notify } from 'notiflix';
import { convertCurrency, getCountryCurrencies } from './js/api-service';
import addIncomingField from './js/addIncomingField';
import { renderCountryCurrenciesWithAddition } from './js/renderCountryCurrencies';

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

  const currencyFromArr = [...document.querySelectorAll('#currency-from')];
  const amountsArr = [...document.querySelectorAll('#amount')];
  const totalEl = document.querySelector('#total-converted');
  const objArr = currencyFromArr.map((curr, index) => {
    return { [curr.value]: amountsArr[index].value };
  });
  let totalCounter = 0;
  objArr.forEach(element => {
    const entries = Object.entries(element);
    entries.forEach(entry => {
      const numericValue = Number(entry[1]);
      convertCurrency(entry[0], currencyTo.value, numericValue).then(data => {
        totalCounter += data.result;
        totalEl.textContent = totalCounter;
      });
    });
  });
}
