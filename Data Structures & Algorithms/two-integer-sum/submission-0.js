class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var res = [];

        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                var sum = nums[i]+nums[j];
                if(sum == target){
                    res = [i, j];
                    return res;
                }
            }
        }
    }
}
