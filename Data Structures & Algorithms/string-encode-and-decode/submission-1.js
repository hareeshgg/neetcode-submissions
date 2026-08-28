class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length == 0) return String.fromCodePoint(258);

        let separate = String.fromCodePoint(257);
        let encodedStr = "";
        for(var str in strs){
            encodedStr += strs[str] + separate;
        }
        return encodedStr.slice(0, -1);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str == String.fromCodePoint(258)) return [];

        let separate = String.fromCodePoint(257);

        return Array.from(str.split(separate, -1));
    }
}
