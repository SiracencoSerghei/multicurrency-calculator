import axios from 'axios';
import { Notify } from 'notiflix';
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/convert';
const myHeaders = new Headers();
myHeaders.append('apikey', '2XSK1k8PvOGmNpoTmjfiAkB6l6PzRo0E');
export function convertCurrency(inputCurrency, outputCurrency, amount) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };
  return fetch(
    `${BASE_URL}?to=${outputCurrency}&from=${inputCurrency}&amount=${amount}`,
    requestOptions
  ).then(response => {
    if (!response.ok) {
      Notify('There was an error');
      return;
    }
    return response.json();
  });
}
const COUNTRY_CODES_URL = 'https://openexchangerates.org/api/currencies.json';

export function getCountryCurrencies() {
  return fetch(COUNTRY_CODES_URL)
    .then(response => response.json())

    .catch(error => console.log(error));
}
