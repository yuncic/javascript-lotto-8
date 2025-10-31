import { ERROR_MESSAGE } from "./Contants";

const VALIDATOR = {
    validatorAmount(amount) {
        if (isNaN(amount) || amount % LOTTO.PRICE !== 0 || amount <= 0) {
            throw new Error(ERROR_MESSAGE.AMOUNT_ERROR);
        }
    },
    validatorNumber(numbers) {
        if (numbers.length !== LOTTO.NUMBER_COUNT) {
            throw new Error(ERROR_MESSAGE.NUMBER_COUNT_ERROR);
        }

        const UNIQUE = new Set(numbers);
        if (UNIQUE.size !== numbers.length) {
            throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
        }

        numbers.forEach((n) => {
            if (n < LOTTO.MIN_NUMBER || n > LOTTO.MAX_NUMBER) {
                throw new Error(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
            }
        })
    }
}

export default VALIDATOR;