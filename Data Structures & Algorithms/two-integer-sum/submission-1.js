class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var hashset = new Map();
        var result = [];

        for(let i = 0; i < nums.length; i++) {
            var compliment = target - nums[i];
            if(hashset.has(compliment)){
                result.push(hashset.get(compliment), i);
                return result;
            } 
            hashset.set(nums[i], i);
        }
    }
}
