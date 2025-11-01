import { Console } from "@woowacourse/mission-utils";
import VALIDATOR from "./Validator.js";

const InputView = {
  async readPurchaseAmount() {
    try {
      const input = await Console.readLineAsync("구입 금액을 입력해 주세요. ");
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
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요. ");
      const numbers = input.split(",").map(Number);
      VALIDATOR.validatorNumber(numbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요. ");
    const bonus = Number(input);
    return bonus;
  },
};

export default InputView;