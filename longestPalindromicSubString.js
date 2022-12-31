function expandFromCenter(str,left,right){
    let i=0;

    while(str[left-i]&& str[left-i]===str[right+i]){
        i++;
    }

    i--;

    return str.slice(left-i,right+i+1)
}

var longestPalindrome = function(str) {

if(str.length<1||str===null){
   return ''
}
let result='';

for(let i=0;i<str.length;i++){
   let oddPali=expandFromCenter(str,i,i);
   let evenPali=expandFromCenter(str,i-1,i);

   if(oddPali.length>result.length){
       result=oddPali;
   }

   if(evenPali.length>result.length){
       result=evenPali;
   }
}
return result

};


var longestPalindrome = function(s) {
    if(s.length<=1){
        return s
    }
    

    let start = 0;
    let length = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        const lengthChar = expandCenter(s, i, i);
        const lengthSpace = expandCenter(s, i, i + 1);
        const longestChar = Math.max(lengthChar, lengthSpace)
        
        if (longestChar > length) {
            length = longestChar;
            start = i - Math.floor((length - 1) / 2);
        }
    }
    
    return s.substr(start, length);
};

function expandCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}