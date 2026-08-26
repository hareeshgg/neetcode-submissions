class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var hashmap = new Map();
        var result = []
        for(let i = 0; i < nums.length; i++) {
            if(!hashmap.has(nums[i])){
                hashmap.set(nums[i], 0);
            }
            hashmap.set(nums[i], hashmap.get(nums[i])+1);
        }
        const entries = Array.from(hashmap.entries());
        entries.sort((a, b) => b[1] - a[1]);
        for (let j = 0; j < k; j++) {
            result.push(entries[j][0]);
        }
        return(result);
    }
}
