class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let ans = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!ans.has(nums[i])) {
            ans.add(nums[i]);
        }
    }

    let arr = ans.values();

    let res = new Array();

    for(var value of arr){
        res.push(value);
    }

    let answer = res.sort(function(a, b){return a - b});
    if(answer.length == 0) return 0;

    let current = [];
    let maxResult = [];
    let count = 1;
    let maxCount = 0;

    for(let i = 0; i < answer.length; i++){
        if(i == 0 || (answer[i] - answer[i-1] == 1)) {
            current.push(answer[i]);
            count = current.length;
        }
        else{
            if(count > maxCount){
                maxCount = count;
                maxResult = current;
            }
            current = [answer[i]];
            count = 1;
        }
        
    }
     if (count > maxCount) {
        maxCount = count;
        maxResult = current;
    }
    // return (`Array: ${maxResult}, Count: ${maxCount}`);
    return maxCount;
}
}
