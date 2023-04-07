import { getCountryCurrencies } from './api-service';

export function renderCountryCurrencies(arr, element) {
  const currentOptions = [...element.options].map(option => option.value); // получаем текущие опции
  const newOptions = arr.filter(option => !currentOptions.includes(option)); // фильтруем только новые опции
  const fragment = document.createDocumentFragment(); // создаем фрагмент для оптимизации производительности
  newOptions.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    fragment.appendChild(option);
  });
  element.appendChild(fragment); // добавляем фрагмент в элемент
}
export function renderCountryCurrenciesWithAddition(name) {
  getCountryCurrencies().then(data => {
    const currencyArr = document.querySelectorAll(name);
    currencyArr.forEach(currency => {
      renderCountryCurrencies(Object.keys(data), currency);
    });
  });
}
