var isSubsequence = function(s, t) {

    if(s.length>t.length){
        return false
    }

    let left=0;
    let sLeft=0;
    let right=t.length;
    let str=''

    while(left<right){
        if(s[sLeft]!==t[left]){
            left++
        }else if(s[sLeft]===t[left]){
            str+=t[left];
            left++;
            sLeft++

        }
    }


    if(str.length!==s.length){
        return false
    }else{
        for(let i=0;i<str.length;i++){
            if(s[i]!==str[i]){
                return false
            }
        }
    }

    return true

};


var isSubsequence = function(s, t) {

    if(s.length>t.length){
        return false
    }

    let left=0;
    let sLeft=0;
    let right=t.length;

    while(left<right){
        if(s[sLeft]!==t[left]){
            left++
        }else if(s[sLeft]===t[left]){
            left++;
            sLeft++

        }
    }
    if(s.length===sLeft){
        return true
    }else{
        return false
    }

};
