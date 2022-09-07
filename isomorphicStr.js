var isIsomorphic = function(s, t) {
    let sObj={};
    let tObj={};

    for(let i=0;i<s.length;i++){
        if(sObj[s[i]]!==tObj[t[i]]){
            return false
        }else{
            sObj[s[i]]=i;
            tObj[t[i]]=i
        }
    }
    return true
};
