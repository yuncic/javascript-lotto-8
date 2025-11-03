import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./Constants.js";

const OutputView = {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(", ")}]`);
    });
    Console.print("");
  },

  printResult(lottoResult) {
    const { ranks } = lottoResult;
    const profitRate = lottoResult.profit;

    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
    Console.print(OUTPUT_MESSAGE.RESULT_DIVIDER);
    Console.print(`${OUTPUT_MESSAGE.MATCH_3} - ${ranks[5] || 0}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_4} - ${ranks[4] || 0}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_5} - ${ranks[3] || 0}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_5_BONUS} - ${ranks[2] || 0}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_6} - ${ranks[1] || 0}개`);
    Console.print(`${OUTPUT_MESSAGE.PROFIT} ${profitRate}%입니다.`);
  },
};


export default OutputView;