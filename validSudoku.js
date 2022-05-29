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


var isValidSudoku = function(board) {

    //differet set for rows, columns, and subbox////
    let rows=[];
    let columns=[];
    let boxes=[];
    for(let i=0;i<board.length;i++){
        rows.push(new Set());
        columns.push(new Set());
        boxes.push(new Set());
    }

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
             const cell=board[i][j];
            if(cell==='.'){
                continue
            }
            const boxNum=3 * Math.floor(i/3)+ Math.floor(j/3)
            if(rows[i].has(cell)|| columns[j].has(cell)|| boxes[boxNum].has(cell)){
                return false
            }else{
                rows[i].add(cell);
                columns[j].add(cell);
                boxes[boxNum].add(cell)
            }
        }
    }

    return true
};


var isValidSudoku = function(board) {

    //differet set for rows, columns, and subbox////
   const set=new Set()

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
             const cell=board[i][j];
            if(cell==='.'){
                continue
            }
            const boxNum=3* Math.floor(i/3)+Math.floor(j/3)
            const row=`row: ${i}. value ${cell}` //if value in same row colums or box twice,  string will be the same
            const col=`col: ${j}. value ${cell}`
            const box=`box: ${boxNum}. value ${cell}`
            ///if there's duplicate, then false
            if(set.has(row) || set.has(col) || set.has(box)){
                return false;
            }else{
                set.add(row);
                set.add(col);
                set.add(box);
            }

        }
    }

    return true
};


