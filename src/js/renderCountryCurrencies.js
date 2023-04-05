export default function renderCountryCurrencies(arr, element) {
  const markup = arr.map(
    element => `<option value = "${element}">${element}</option>`
  );
  element.innerHTML = markup;
}
