var solveSudoku = function(board) {
    let rows=[{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        }];
    let columns=[{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        }];
    let boxes=[{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        },{
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
        }];

     for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
             const cell=board[i][j];
            if(cell==='.'){
                continue
            }
          else{
            const boxNum=3 * Math.floor(i/3)+ Math.floor(j/3)
            let eachRowCount=rows[i];
            let eachColumnCount=columns[j];
            let eachBoxCount=boxes[boxNum];
            // console.log('eachRowCount->',eachRowCount,'eachCOlumnCount=>',eachColumnCount,'eachBoxCount=>',eachBoxCount);
            // console.log('cellElse=>',cell)
            if( cell in eachRowCount){
              eachRowCount[cell]+=1
            }
            if( cell in eachColumnCount){
              eachColumnCount[cell]+=1
            }
            if( cell in eachBoxCount){
              eachBoxCount[cell]+=1
            }
          }
        }
    }
    // console.log('row=>',rows,'columns=>',columns, 'boxes=>',boxes)
    ////This is trying to solve the empty boxes with period///
     for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
             let cell=board[i][j];
            if(cell==='.'){
                ///i. row    ///j columns ////boxNum
                const boxNum=3 * Math.floor(i/3)+ Math.floor(j/3)
                console.log('location .=>','i->',i,'j->',j,'boxNum=>',boxNum);
                let rowVal=rows[i]
                let columnVal=columns[j]
                let boxVal=boxes[boxNum];
                // console.log('rowVal=>',rowVal,'columnVal=>',columnVal,'boxVal=>',boxVal);
                let eachRowColBoxNineArr=['1','2','3','4','5','6','7','8','9'];
                for(let eachNumCount of eachRowColBoxNineArr){
                    if(rowVal[eachNumCount]!==1 && columnVal[eachNumCount]!==1 && boxVal[eachNumCount]!==1){
                        console.log('eachNumCount equal=>',eachNumCount);

                    }
                }

            }
        }
    }
}



var solveSudoku = function(board) {
      const isUsedInRow = new Array(9).fill(0).map(_ => new Array())
    const isUsedInCol = new Array(9).fill(0).map(_ => new Array())
    const isUsedInSub = new Array(9).fill(0).map(_ => new Array())

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const num = board[i][j]
        if (num === '.') continue
        const subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3
        isUsedInRow[i][num] = true
        isUsedInCol[j][num] = true
        isUsedInSub[subBoxIndex][num] = true
      }
    }

    // fill the blanks by backtracking
    const fill = (i, j) => {
      if (i === 9) return true
      const nextI = j === 8 ? i + 1 : i
      const nextJ = j < 8 ? j + 1: 0
      const subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3
      if (board[i][j] === '.') {
        for (let num = 1; num <= 9; num++) {
          if (!isUsedInRow[i][num] && !isUsedInCol[j][num] && !isUsedInSub[subBoxIndex][num]) {
            board[i][j] = `${num}`
            isUsedInRow[i][num] = true
            isUsedInCol[j][num] = true
            isUsedInSub[subBoxIndex][num] = true

            if (fill(nextI, nextJ)) {
              return true
            }

            // if no number is valid here
            board[i][j] = '.'
            isUsedInRow[i][num] = false
            isUsedInCol[j][num] = false
            isUsedInSub[subBoxIndex][num] = false
          }
        }
        return false
      } else {
        return fill(nextI, nextJ)
      }
    }

    fill(0, 0)

};

