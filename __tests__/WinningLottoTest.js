import WinningLotto from "../src/WinningLotto";

describe("WinningLotto 클래스 테스트", () => {
    test("당첨 번호 6개를 초과하면 예외 발생", () => {
        expect(() => {
            new WinningLotto([1,2,3,4,5,6,7],10);
        }).toThrow("[ERROR]");
    })

    test("당첨 번호에 중복된 숫자가 있으면 예외 발생", () => {
        expect(() => {
            new WinningLotto([1,2,3,4,5,5],10);
        }).toThrow("[ERROR]");
    })

    test("보너스 번호가 당첨 번호와 중복되면 예외 발생", () => {
        expect(() => {
            new WinningLotto([1,2,3,4,5,6],6);
        }).toThrow("[ERROR]");
    })

    test("정상적인 입력이면  객체 생성", () => {
        const WINNING = new WinningLotto([1,2,3,4,5,6],7);
        expect(WINNING.numbers).toEqual([1,2,3,4,5,6]);
        expect(WINNING.bonus).toBe(7);
    });
});