var isValidSudoku = function(board) {
    //////rows---->
    for(let i=0;i<board.length;i++){
        const set=new Set()///check each row for duplicates
        // console.log('set=>',set)
        for(let j=0;j<board[i].length;j++){
             const cell=board[i][j];   //loop through each el in the row
            if(cell==='.'){
                continue
            }
            if(set.has(cell)){
                return false
            }else{
                set.add(cell)
            }
        }
        // console.log('set after=>',set)
    }
    ////check for columns/////
    for(let i=0;i<board.length;i++){
        const set=new Set()///check each columns for duplicates
        // console.log('set=>',set)
        for(let j=0;j<board[i].length;j++){
             const cell=board[j][i];   //loop through each el in columns
            // console.log('cell=>',cell)
            if(cell==='.'){
                continue
            }
            if(set.has(cell)){
                return false
            }else{
                set.add(cell)
            }
        }
        // console.log('set after=>',set)
    }
    ////each subbox////
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const set=new Set()   //check for duplicates
            // console.log('set=>',set)
            ////each element of subbox
            for(let k=0;k<3;k++){
                for(let l=0;l<3;l++){
                    const cell=board[3*i+k][3*j+l]
                    // console.log('cell=>',cell);
                    if(cell==='.'){
                        continue
                    }
                    if(set.has(cell)){
                        return false
                    }else{
                        set.add(cell)
                    }
                }
            }
            // console.log('after Set=>',set)
        }
    }
    return true
};
