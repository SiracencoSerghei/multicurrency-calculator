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
