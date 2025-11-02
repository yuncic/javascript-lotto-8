import LottoMachine from "../src/LottoMachine.js";
import Lotto from "../src/Lotto.js";
import { LOTTO } from "../src/Constants.js";

describe("LottoMachine 클래스 테스트", () => {
  test("금액에 따라 올바른 개수의 로또가 생성되어야 한다", () => {
    const lottoMachine = new LottoMachine();
    const amount = 5000;
    const lottos = lottoMachine.buyLottos(amount);

    expect(lottos).toHaveLength(amount / LOTTO.PRICE);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test("각 로또의 번호는 6개이며, 중복되지 않고 1~45 범위 내여야 한다", () => {
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.buyLottos(1000);
    const lottoNumbers = lottos[0].numbers;

    expect(lottoNumbers).toHaveLength(6);
    const unique = new Set(lottoNumbers);
    expect(unique.size).toBe(6);
    lottoNumbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(45);
    });
  });
});