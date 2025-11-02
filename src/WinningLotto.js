import VALIDATOR from "./Validator.js";

class WinningLotto {
    #numbers;
    #bonus;

    constructor(numbers, bonus) {
        this.#validate(numbers, bonus);
        this.#numbers = [...numbers].sort((a,b) => a - b);
        this.#bonus = bonus;
    }

    #validate(numbers, bonus) {
        VALIDATOR.validatorNumber(numbers);

        if (bonus < 1 || bonus > 45) {
            throw new Error("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
        }
        if (numbers.includes(bonus)){
            throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.')
        }
    }
    get numbers() {
        return this.#numbers;
    }

    get bonus() {
        return this.#bonus;
    }

    matchCount(lotto) {
        return lotto.numbers.filter(num => this.#numbers.includes(num)).length;
    }

    hasBonus(lotto) {
        return lotto.numbers.includes(this.#bonus)
    }


}

export default WinningLotto;