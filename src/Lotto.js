import VALIDATOR from "./Validator";

class Lotto {
  #numbers;

  constructor(numbers) {
    VALIDATOR.validatorNumber(numbers);
    this.#numbers = [...numbers].sort((a,b) => a - b);
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
