var reverse = function(x) {
    let xStr=x.toString();
    if(xStr[0]==='-'){
    let numResult='-'
        for(let i=xStr.length-1;i>0;i--){
            numResult+=xStr[i];
        }
        let resultNum=parseInt(numResult)
        if(resultNum<=((-2)**31)){
            return 0
        }else{
            return resultNum
        }
    }else{
        let numResult=''
        for(let i=xStr.length-1;i>=0;i--){
            numResult+=xStr[i];
        }
        let resultNum=parseInt(numResult)
        if(resultNum>=((2**31)-1)){
            return 0
        }else{
            return resultNum
        }
    }
};
