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