class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = 9;
        let rows = new Set();
        let cols = new Set();
        let box = new Set();

        for(let i = 0; i < n; i++){
            rows[i] = new Set();
            cols[i] = new Set();
            box[i] = new Set();
        }

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                var value = board[r][c];
                if(value == ".") continue;
                if(rows[r].has(value)) return false;
                rows[r].add(value);

                if(cols[c].has(value)) return false;
                cols[c].add(value);

                let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if(box[idx].has(value)) return false;
                box[idx].add(value);
            }
        }
        return true;
    }
}
