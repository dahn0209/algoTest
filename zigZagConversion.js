var convert = function(s, numRows) {
    if(numRows===1){
        return s
    }
    let y=0;
    let isZigging=true;
    let rows = [...new Array(numRows)].map(()=>[]);


    for (let i=0;i<s.length;i++){
        const char=s[i];
        rows[y].push(char);

        if(y===numRows-1){
            isZigging=false;
        }
        if(y===0){
            isZigging=true
        }


        if(isZigging){
            y++;
        }else{
            y--
        }
    }
    return rows.reduce((string,row)=>string+row.join(''),'');
};
