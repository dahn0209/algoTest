var generate = function(numRows) {
    ///paschalTriangle->declare an array of size(numRows)///
        let paschalTriangle=new Array(numRows);
    
    ///generate row by row////
        for(let i=0;i<numRows;i++){
            let row=new Array(i+1);
            //row[0]=1
            row[0]=1;
            //row[row.length-1]=1
            row[row.length-1]=1;
    ///to generate the values between 1.... and....1, look at the row above(previous row)
            for(let j=1;j<row.length-1;j++){
                //rowAbove=paschalTriangle[i-1]
                let rowAbove=paschalTriangle[i-1];
                //then add//
                row[j]=rowAbove[j]+rowAbove[j-1];  
            }
            paschalTriangle[i]=row 
        }
    
        return(paschalTriangle)
  
        
    };

    var generate = function(numRows) {
        if(numRows<1) return []
    
        if(numRows===1) return [[1]];
    
        const triangle=[[1]];
    
        for(let i=1;i<numRows;i++){
            let prevRow=triangle[i-1];
            let currentRow=[];
            currentRow.push(1);
    
            for(let j=1;j<prevRow.length;j++){
                currentRow[j]=prevRow[j]+prevRow[j-1];
            }
            currentRow.push(1);
    
            triangle.push(currentRow);
        }
        
        return triangle
        
    };