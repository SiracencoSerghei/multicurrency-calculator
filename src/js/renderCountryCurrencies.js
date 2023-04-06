import { getCountryCurrencies } from './api-service';
export function renderCountryCurrencies(arr, element) {
  const markup = arr.map(
    element => `<option value = "${element}">${element}</option>`
  );
  element.innerHTML = markup;
}
export function renderCountryCurrenciesWithAddition(name) {
  getCountryCurrencies().then(data => {
    document.querySelectorAll(`${name}`).forEach(element => {
      if (element.value == 'AED') {
        return;
      }
      renderCountryCurrencies(Object.keys(data), element);
    });
  });
}
