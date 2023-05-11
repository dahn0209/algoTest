/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let sLowerCase=s.split('');
    let vowels=['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let left=0;
    let right=sLowerCase.length-1;

    while(left<right){

        if(!vowels.includes(sLowerCase[left])){
            left++   
        }

        if(!vowels.includes(sLowerCase[right])){
            right--;
        }

        if(vowels.includes(sLowerCase[left])){
            if(!vowels.includes(sLowerCase[right])){
            right--;
            }
        }

        if(vowels.includes(sLowerCase[right])){
            if(!vowels.includes(sLowerCase[left])){
                left++
            }
        }

        if(vowels.includes(sLowerCase[left])){
         if(vowels.includes(sLowerCase[right])){
            let temp=sLowerCase[left];
            sLowerCase[left]=sLowerCase[right];
            sLowerCase[right]=temp;
            left++;
            right--;
        }}
    }

    return(sLowerCase.join(''))
    
};