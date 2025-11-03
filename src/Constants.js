export const LOTTO = {
    PRICE: 1000,
    NUMBER_COUNT: 6,
    MIN_NUMBER: 1,
    MAX_NUMBER: 45
}

export const PRIZE = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000
}

export const MESSAGE = {
    INPUT_PRICE: "구입 금액을 입력해 주세요. ",
    INPUT_WINNING_NUM: "당첨 번호를 입력해 주세요. ",
    INPUT_BONUS_NUM: "보너스 번호를 입력해 주세요. ",
}

export const OUTPUT_MESSAGE = {
  RESULT_TITLE: "당첨 통계",
  RESULT_DIVIDER: "---",
  MATCH_3: "3개 일치 (5,000원)",
  MATCH_4: "4개 일치 (50,000원)",
  MATCH_5: "5개 일치 (1,500,000원)",
  MATCH_5_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  MATCH_6: "6개 일치 (2,000,000,000원)",
  PROFIT: "총 수익률은",
  PURCHASE: (count) => `${count}개를 구매했습니다.`,
};

export const DEFAULT_ERROR_MESSAGE = "[ERROR] ";

export const ERROR_MESSAGE = {
    AMOUNT_ERROR: `${DEFAULT_ERROR_MESSAGE}구입 금액은 1000원 단위 양수여야 합니다.`,
    NUMBER_RANGE_ERROR: `${DEFAULT_ERROR_MESSAGE}로또 번호는 1~45 사이여야 합니다.`,
    NUMBER_COUNT_ERROR: `${DEFAULT_ERROR_MESSAGE}로또 번호는 6개여야 합니다.`,
    DUPLICATE_ERROR: `${DEFAULT_ERROR_MESSAGE}중복된 로또 번호가 존재합니다.`,
    INVALID_INPUT_ERROR: `${DEFAULT_ERROR_MESSAGE}잘못된 입력값 입니다.`,
    BONUS_DUPLICATE_ERROR: `${DEFAULT_ERROR_MESSAGE}보너스 번호는 당첨 번호와 중복될 수 없습니다.`
}