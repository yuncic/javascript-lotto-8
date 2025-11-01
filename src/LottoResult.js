import { LOTTO , PRIZE } from "./Contants.js";

class LottoResult {
    constructor(lottos, winningLotto) {
        this.lottos = lottos;
        this.winningLotto = winningLotto;
        this.ranks = this.#calculateRanks();      
    }

    #calculateRanks() {
        const ranks = {};

        this.lottos.forEach((lotto) => {
            const matchCount = this.winningLotto.matchCount(lotto);
            const hasBonus = this.winningLotto.hasBonus(lotto);
            const rank = this.#getRank(matchCount, hasBonus);
            ranks[rank] = (ranks[rank] || 0) + 1;
        });

        return ranks;
    }

        #getRank(matchCount, hasBonus) {
            if (matchCount === 6) return 1;
            if (matchCount === 5 && hasBonus) return 2;
            if (matchCount === 5) return 3;
            if (matchCount === 4) return 4;
            if (matchCount === 3) return 5;
            return 0;
        }

    calculateProfit(purchaseAmount) {
        let totalReward = 0;

            Object.entries(this.ranks).forEach(([rank, count]) => {
                const prize = PRIZE[rank] || 0;
                totalReward += prize * count;
            });
            return Number(((totalReward / purchaseAmount) * 100).toFixed(1));
            
        }
    }

export default LottoResult;