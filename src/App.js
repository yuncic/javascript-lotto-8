import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";
import LottoResult from "./LottoResult.js";
import WinningLotto from "./WinningLotto.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    try {
      const amount = await InputView.readPurchaseAmount();

      const machine = new LottoMachine();
      const lottos = machine.buyLottos(amount);
      OutputView.printLottos(lottos);

      const winningNumbers = await InputView.readWinningNumbers();

      const bonusNumber = await InputView.readBonusNumber();
      const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
      const lottoResult = new LottoResult(lottos, winningLotto);
      OutputView.printResult(lottoResult, amount);
    } catch (error) {
 
    }
  }
}

export default App;