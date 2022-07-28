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


var reverseString = function(s) {

    let left=0;
    let right=s.length-1;
    while(left<right){
        let firstVal=s[left];
        s[left]=s[right];
        s[right]=firstVal;
        left++;
        right--;
    }
};


var reverseWords = function(s) {
    
    let sArr=s.split(' ');
    console.log(sArr)
    for(let i=0;i<sArr.length;i++){
        sArr[i]=sArr[i].split('');
        sArr[i]=sArr[i].reverse()
        sArr[i]=sArr[i].join('');
        
    }
   return sArr.join(' ')
};
