class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;

        let hashset = new Set(nums);

        let longestSub = 1;

        for(var value of hashset){
            if(hashset.has(value - 1)){
                continue;
            } else {
                let currentNum = value;
                let currentSub = 1;
                while(hashset.has(currentNum+1)){
                    currentNum++;
                    currentSub++;
                }
                longestSub = Math.max(longestSub, currentSub);
            }
        }

        return longestSub; 

    }
}
