var plusOne = function(digits) {

    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i]<10){
            return digits
        }else{//49
            digits[i]=0
        }
    }
    //99->100//
    digits.unshift(1);
    return digits
};


var plusOne = function(digits) {

    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]=digits[i]+1
            return digits
        }else{//49  if current digit is 9
            digits[i]=0
        }
    }
    //99->100//
    digits.unshift(1);
    return digits
};
