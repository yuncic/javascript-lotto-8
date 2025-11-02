import { ERROR_MESSAGE } from "./Constants.js";
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
            throw new Error(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
        }
        if (numbers.includes(bonus)){
            throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE_ERROR)
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