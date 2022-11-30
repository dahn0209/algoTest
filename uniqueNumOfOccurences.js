var uniqueOccurrences = function(arr) {
    
    let obj={}
    
    for(let eachNum of arr){
        if((eachNum in obj)){
            obj[eachNum]++
        }else{
            obj[eachNum]=1;
        }
    }
        
    let value=(Object.values(obj));
    
    
    for(let i=0;i<value.length;i++){
        if(value.slice(i+1).includes(value[i])){
            return false
        }
    }
    return true
};


var uniqueOccurrences = function(arr) {
    
    let obj={}
    
    for(let eachNum of arr){
        if((eachNum in obj)){
            obj[eachNum]++
        }else{
            obj[eachNum]=1;
        }
    }
        
    let value=(Object.values(obj));
    
    
    
    return value.length===new Set(value).size
};




