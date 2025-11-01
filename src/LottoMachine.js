import Lotto from "./Lotto";
import { LOTTO } from "./Contants";
import { Random } from "@woowacourse/mission-utils";

class LottoMachine {
    buyLottos(amount) {
        const count = amount / LOTTO.PRICE;
        const lottos = [];

        for (let i = 0; i < count; i++) {
            const numbers = this.#generateLottoNumbers();
            lottos.push(new Lotto(numbers));
        }
        return lottos;
    }

    #generateLottoNumbers() {
        const numbers = Random.pickUniqueNumbersInRange(
            LOTTO.MIN_NUMBER,
            LOTTO.MAX_NUMBER,
            LOTTO.NUMBER_COUNT
        );
        return numbers.sort((a, b) => a - b);
    }
}

export default LottoMachine;