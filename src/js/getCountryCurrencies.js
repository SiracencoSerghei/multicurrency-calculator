const BASE_URL = 'https://openexchangerates.org/api/currencies.json';

export default function getCountryCurrencies() {
  return fetch(BASE_URL)
    .then(response => response.json())

    .catch(error => console.log(error));
}
