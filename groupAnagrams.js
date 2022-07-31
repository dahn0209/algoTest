var groupAnagrams = function(strs) {


    let obj={};
    let newSortedStrs=[]

    for(let eachStr of strs){
        let eachStrSplit=eachStr.split('');
        eachStrSplit.sort();
        let newStr=eachStrSplit.join('')
        newSortedStrs.push(newStr)
    }

    let newObj={}

    for(let i=0;i<strs.length;i++){
        if(!newObj[newSortedStrs[i]]){
            newObj[newSortedStrs[i]]=[strs[i]]
        }else{
            newObj[newSortedStrs[i]].push(strs[i])
        }
    }

    return (Object.values(newObj))
};



var groupAnagrams = function(strs) {


    let obj={};
    let newSortedStrs=strs.map(word=>word.split('').sort().join(''))

    let newObj={}

    for(let i=0;i<strs.length;i++){
        if(!newObj[newSortedStrs[i]]){
            newObj[newSortedStrs[i]]=[strs[i]]
        }else{
            newObj[newSortedStrs[i]].push(strs[i])
        }
    }

    return (Object.values(newObj))
};
