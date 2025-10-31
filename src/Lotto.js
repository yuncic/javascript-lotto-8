class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a,b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const UNIQUE_NUMBERS = new Set(numbers);
    if (UNIQUE_NUMBERS.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 로또 번호가 존재합니다.");
    }
    numbers.forEach((n) => {
      if (n < 1 || n > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
