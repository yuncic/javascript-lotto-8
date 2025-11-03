import VALIDATOR from "./Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    VALIDATOR.validatorNumber(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
