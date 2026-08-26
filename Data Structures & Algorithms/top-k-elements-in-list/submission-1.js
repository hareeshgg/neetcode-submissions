class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var count = new Map();
        for(var n of nums){
            count.set(n, (count.get(n) || 0) + 1 );
        }

        var heap = new PriorityQueue(
            (a, b) => count.get(a) - count.get(b)
        );

        for(var key of count.keys()){
            heap.enqueue(key);
            if(heap.size() > k){
                heap.dequeue()
            }
        }

        var answer = [k];
        for (let i = 0; i < k; i++){
            answer[i] = heap.dequeue(); 
        }
        return answer;
    }
}
