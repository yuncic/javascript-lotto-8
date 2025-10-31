import Lotto from "../src/Lotto.js";
import WinningLotto from "../src/WinningLotto.js";
import LottoResult from "../src/LottoResult.js";

describe("LottoResult 클래스 테스트", () => {
  test("당첨 결과 계산", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 7, 8, 9]),
      new Lotto([10, 11, 12, 13, 14, 15]),
    ];
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

    const result = new LottoResult(lottos, winningLotto);
    expect(result.ranks).toEqual({
      1: 1, // 6개 일치
      3: 1, // 3개 일치
      0: 1, // 나머지
    });
  });

  test("수익률 계산", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 7, 8, 9]),
    ];
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = new LottoResult(lottos, winningLotto);

    const profit = result.calculateProfit(2000);
    expect(profit).toBeGreaterThan(0);
  });
});