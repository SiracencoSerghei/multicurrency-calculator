const ref = document.querySelector('.inputCurrencyFields');

export default function addIncomingField() {
  const markup = `<label for="currency-from">Incoming currency:</label>
        <select id="currency-from" name="currencyFrom" class = "js-currency-from"required></select>
        <label for="amount"></label>
        <input type="number" name="amount" class="amount" id ="amount"/>`;
  ref.insertAdjacentHTML('beforeend', markup);
}
