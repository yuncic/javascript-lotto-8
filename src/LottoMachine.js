import Lotto from "./Lotto";
import { LOTTO } from "./Contants";

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
        const numbers = [];
        while (numbers.length < LOTTO.NUMBER_COUNT) {
            const num = Math.floor(Math.random() * LOTTO.MAX_NUMBER) + 1 ;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers.sort((a,b) => a - b);
    }
}

export default LottoMachine;