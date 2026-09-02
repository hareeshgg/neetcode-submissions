class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;

        let ans = 0;

        let hashset = new Set();

        while(right < s.length){
            while(hashset.has(s[right])){
                hashset.delete(s[left]);
                left++;
            }
            hashset.add(s[right]);
            ans = Math.max(ans, (right - left) + 1);
            right++;
        }
        return ans;
    }
}
