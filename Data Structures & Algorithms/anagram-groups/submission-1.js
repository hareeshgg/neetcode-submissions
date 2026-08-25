class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    // Create a hashmap
    var hashmap = new Map();
        // Iterate over items
        for(let i = 0; i < strs.length; i++){
            // Create an Array to store the no. of occurence
            var count = new Array(26).fill(0);
            // Iterate over characteres    
            for(let j = 0; j < strs[i].length; j++){
                    // Increase count at the specified index      
                    count[strs[i].charCodeAt(j) - 97]++;      
            }
            // If hashmap contains the key then push new item to the key
            if(hashmap.has(count.toString())){
                hashmap.get(count.toString()).push(strs[i]);
            } else {
                // if not then create a new key with its value;
                hashmap.set(count.toString(), [strs[i]]);
            }
        }
        // Convert hashmap values to array before returning
        return(Array.from(hashmap.values()));
    }
}