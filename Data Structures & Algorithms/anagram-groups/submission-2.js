class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    // Create a hashmap
    var hashmap = new Map();
        // Iterate over items
        for(const str of strs){
            // Create an Array to store the no. of occurence
            var count = new Array(26).fill(0);
            // Iterate over characteres    
            for(const char of str){
                    // Increase count at the specified index      
                    count[char.charCodeAt(0) - 97]++;      
            }

            const key = count.toString();
            // If hashmap doesnt contains the key then create a new key with empty value
            if (!hashmap.has(key)) {
                hashmap.set(key, []);
            }

            // Push item into the specified key
            hashmap.get(key).push(str);
        }
        // Convert hashmap values to array before returning
        return(Array.from(hashmap.values()));
    }
}