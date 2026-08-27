class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if (nums.length == 0) return 0;
    nums.sort(function(a, b){return a - b});

    let current = [];
    let maxResult = [];
    let count = 1;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++){
        if(i == 0 || nums[i] !== nums[i-1]){
            if(i == 0 || (nums[i] - nums[i-1] == 1)) {
                current.push(nums[i]);
                count = current.length;
            }else{
                if(count > maxCount){
                    maxCount = count;
                    maxResult = current;
                }
                    current = [nums[i]];
                    count = 1;
            }
        }
        
    }
     if (count > maxCount) {
        maxCount = count;
        maxResult = current;
    }
    return maxCount;
    }
}
