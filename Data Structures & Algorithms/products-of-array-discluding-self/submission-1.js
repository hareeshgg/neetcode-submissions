class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var answer = new Array().fill(1);
        var prefix = 1;
        var postfix = 1;

        for(let i = 0; i < nums.length; i++){
                answer[i] = prefix;
                prefix *= nums[i];     
        }

        for(let j = nums.length - 1; j >=0; j-- ){ 
                answer[j] *= postfix;
                postfix *= nums[j];        
        }
        return answer;
    }
}
