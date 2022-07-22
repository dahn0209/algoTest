var isPalindrome = function(s) {
    s=s.toLowerCase();


   let alphaNum='abcdefghijklmnopqrstuvwxyz0123456789';
   let arr=[];
   let reverseS=''

   for(let eachEl of s){
       if(alphaNum.includes(eachEl)){
           arr.push(eachEl)
       }
   }

    let arrToStr=arr.join('');

    if(arrToStr.length===0){
        return true
    }

   for(let eachEL of s){
       reverseS+=arr.pop();
       if(arr.length===0){
           break
       }
   }

    if(arrToStr===reverseS){
        return true
    }else{
       return false
    }
};


var isPalindrome = function(s) {
    s=s.toLowerCase();
    let alphaNum='abcdefghijklmnopqrstuvwxyz0123456789';
    let newS=''

    for(let eachEl of s){
        if(alphaNum.includes(eachEl)){
           newS+=eachEl
        }
    }
    let result=true;

    let left=0;
    let right=newS.length-1;

    while(left<right){
        if(newS[left]===newS[right]){
            left++;
            right--;
        }else{
            result=false
            break
        }

    }

    return result

};


////most efficent in space and time////
var isPalindrome = function(s) {

    const newS=s.replace(/[\W|_]/g,'').toLowerCase();
    let result=true;

    let left=0;
    let right=newS.length-1;

    while(left<right){
        if(newS[left]===newS[right]){
            left++;
            right--;
        }else{
            result=false
            break
        }
    }
    return result
};
