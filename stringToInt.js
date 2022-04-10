var myAtoi = function(s) {
    let result= parseInt(s);
    if(Number.isInteger(result)===false){
        return 0
    }
    else if(result<=((-2)**31)){
        return ((-2)**31)
    }
    else if(result>=((2**31)-1)){
        return ((2**31)-1)
    }

    return result
};
