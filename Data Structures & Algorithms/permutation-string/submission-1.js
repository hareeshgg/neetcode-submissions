class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = new Array(26).fill(0);
        let s2Map = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++ ){
            s1Map[s1.charCodeAt(i) - 97]++;
            s2Map[s2.charCodeAt(i) - 97]++;
        }
        for(let i = 0; i < s2.length - s1.length; i++){
            if(this.matches(s1Map, s2Map)) return true;
            s2Map[s2.charCodeAt(i + s1.length) - 97]++;
            s2Map[s2.charCodeAt(i) - 97]--;
        }
        return this.matches(s1Map, s2Map);
    }

    matches(s1Map, s2Map){
        for(let i = 0; i < 26; i++){
            if(s1Map[i] != s2Map[i]) return false;
        }
        return true;
    }
}
