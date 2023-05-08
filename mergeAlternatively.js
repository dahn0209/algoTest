var mergeAlternately = function(word1, word2) {

    let max=Math.max(word1.length,word2.length);

    let result=''

    for(let i=0;i<max;i++){

        if(word1[i]!==undefined){
            result+=word1[i];
        }
        if(word2[i]!==undefined){
            result+=word2[i]
        }
    }
    return(result)
    
};


var mergeAlternately = function(word1, word2) {

    let min=Math.min(word1.length,word2.length);

    let result=''

    for(let i=0;i<min;i++){

            result+=word1[i];
        
            result+=word2[i]
    
    }

    if(word1.length===min){
        return(result+=word2.substring(min))
    }

    else if(word2.length===min){
        return (result+=word1.substring(min))
    }

    
};