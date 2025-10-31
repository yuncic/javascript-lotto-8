export const LOTTO = {
    PRICE: 1000,
    NUMBER_COUNT: 6,
    MIN_NUMBER: 1,
    MAX_NUMBER: 45
}

export const PRIZE = {
    3: 5000,
    4: 50000,
    5: 1500000,
    6: 2000000000
}

export const ERROR_MESSAGE = {
    AMOUNT_ERROR: '[ERROR] 구입 금액은 1000원 단위 양수여야 합니다.',
    NUMBER_RANGE_ERROR: '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
    NUMBER_COUNT_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
    DUPLICATE_ERROR: '[ERROR] 중복된 로또 번호가 존재합니다.',
    INVALID_INPUT_ERROR: '[ERROR] 잘못된 입력값 입니다.'
}