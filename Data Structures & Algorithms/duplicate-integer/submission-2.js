class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var hashset = new Set();

        for(let i = 0; i < nums.length; i++) {
            if(hashset.has(nums[i])) return true;
            hashset.add(nums[i]);
        }
        return false;
    }
}
