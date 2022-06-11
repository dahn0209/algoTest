var reverseString = function(s) {

    let left=0;
    let right=s.length-1;
    while(left<right){
        let firstVal=s[left];
        let lastVal=s[right];
        s[left]=lastVal;
        s[right]=firstVal;
        left++;
        right--
    }

};


var reverseString = function(s) {

    s.reverse()

};
