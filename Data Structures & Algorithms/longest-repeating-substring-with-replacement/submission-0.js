class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let occurence = new Array(26).fill(0);

        let left = 0;

        let maxOccurence = 0;
        let ans = 0;

        for(let right = 0; right < s.length; right++){
            maxOccurence = Math.max(maxOccurence, ++occurence[s.charCodeAt(right) - 65]);
            if(right - left + 1 - maxOccurence > k){
                occurence[s.charCodeAt(left) - 65]--;
                left++
            }
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}

