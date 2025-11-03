import { Console } from "@woowacourse/mission-utils";
import VALIDATOR from "./Validator.js";
import { MESSAGE } from "./Constants.js";

const InputView = {
  async readPurchaseAmount() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_PRICE);
      const amount = Number(input);
      VALIDATOR.validatorAmount(amount);
      return amount;
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  },

  async readWinningNumbers() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUM);
      const numbers = input.split(",").map(Number);
      VALIDATOR.validatorNumber(numbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUM);
    const bonus = Number(input);
    return bonus;
  },
};

export default InputView;