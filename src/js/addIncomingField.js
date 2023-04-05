const ref = document.querySelector('.inputCurrencyFields');

export default function addIncomingField() {
  const markup = `<label for="currency-from">Incoming currency:</label>
        <select id="currency-from" name="currencyFrom" required></select>
        <label for="amount"></label>
        <input type="number" name="amount" class="amount" />`;
  ref.insertAdjacentHTML('beforeend', markup);
}
