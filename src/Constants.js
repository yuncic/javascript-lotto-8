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

export const DEFAULT_ERROR_MESSAGE = "[ERROR] ";

export const ERROR_MESSAGE = {
    AMOUNT_ERROR: `${DEFAULT_ERROR_MESSAGE}구입 금액은 1000원 단위 양수여야 합니다.`,
    NUMBER_RANGE_ERROR: `${DEFAULT_ERROR_MESSAGE}로또 번호는 1~45 사이여야 합니다.`,
    NUMBER_COUNT_ERROR: `${DEFAULT_ERROR_MESSAGE}로또 번호는 6개여야 합니다.`,
    DUPLICATE_ERROR: `${DEFAULT_ERROR_MESSAGE}중복된 로또 번호가 존재합니다.`,
    INVALID_INPUT_ERROR: `${DEFAULT_ERROR_MESSAGE}잘못된 입력값 입니다.`,
    BONUS_DUPLICATE_ERROR: `${DEFAULT_ERROR_MESSAGE}보너스 번호는 당첨 번호와 중복될 수 없습니다.`
}