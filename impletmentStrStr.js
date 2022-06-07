var strStr = function(haystack, needle) {
    if(needle.length===0) return 0

    let i=0;

    while(i<haystack.length){
        if(haystack.substring(i,i+needle.length)!==needle){
            i++
        }else{
            break
        }
    }
    if(i>=haystack.length){
        return -1
    }else{
        return i
    }
};


var strStr = function(haystack, needle) {
    if(needle.length===0) return 0

    return haystack.indexOf(needle)
};
