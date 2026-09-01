class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let maxBuy = prices[0];
        for(var val of prices){
            maxBuy = Math.min(val, maxBuy);
            let currentProfit = val - maxBuy;
            maxProfit = Math.max(currentProfit, maxProfit);
        }
        return maxProfit;
    }
}
