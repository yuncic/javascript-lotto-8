import { ERROR_MESSAGE , LOTTO } from "./Contants.js";

class WinningLotto {
    #numbers;
    #bonus;

    constructor(numbers, bonus) {
        this.#validate(numbers, bonus);
        this.#numbers = [...numbers].sort((a,b) => a - b);
        this.#bonus = bonus;
    }

    #validate(numbers, bonus) {
        if (numbers.length !== LOTTO.NUMBER_COUNT) {
            throw new Error(ERROR_MESSAGE.NUMBER_COUNT_ERROR)
        }
        
        if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
            throw new Error(ERROR_MESSAGE.NUMBER_RANGE_ERROR)
        }
        if (numbers.includes(bonus)){
            throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.')
        }
        
        const UNIQUE_NUMBERS = new Set(numbers);
        if (UNIQUE_NUMBERS.size !== numbers.length) {
            throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR)
        }
    }
    get numbers() {
        return this.#numbers;
    }

    get bonus() {
        return this.#bonus;
    }
}

export default WinningLotto;