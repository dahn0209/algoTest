var lengthOfLongestSubstring = function(s) {
    let max=0;
    let begin=0;
    let map={};

    for(let end=0;end<s.length;end++){
        console.log('mapInside=>',map)
        console.log('endIdx=>',end,'eachEl=>',s[end]);
        if(map[s[end]]!==undefined && map[s[end]]>=begin){
        console.log('endIdx=>',end,'s[end]=>',s[end],'map[s[end]]=>',map[s[end]],'begin=>',begin);
            begin=map[s[end]]+1
        console.log(`${map[s[end]]}+1`,'begin After=>',begin)
        }
        map[s[end]]=end;
        console.log('max=>',max,'end=>',end,'begin=>',begin,'end-begin+1=>',end-begin+1)
        max=Math.max(max,end-begin+1)
        console.log('maxAfter=>',max)
    }
    console.log('mapResult=>',map)
    console.log('maxResult=>',max)
    return max

};
