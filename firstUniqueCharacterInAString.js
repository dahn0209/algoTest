var firstUniqChar = function(s) {

    let obj={};

    for(let eachS of s){
        if(!obj[eachS]){
            obj[eachS]=1
        }else{
            obj[eachS]++;
        }
    }

    let result=[]
    
    for(let key in obj){
        if(obj[key]===1){
            result.push(s.indexOf(key))
        }
    }

    if(result.length===0){
        return -1
    } 
    
    return (result[0])
    
};