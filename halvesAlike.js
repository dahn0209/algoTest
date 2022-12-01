/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    
    let firstHalfCount=0;
    let secondHalfCount=0;
    
    let half=(s.length)/2;
    
    for(let i=0;i<half;i++){   
        if((s[i]==='a')||(s[i]==='A')){
            console.log(s[i])
            firstHalfCount++
        }
        if((s[i]==='e')||(s[i]==='E')){
            firstHalfCount++
        }
         if((s[i]==='i')||(s[i]==='I')){
            firstHalfCount++
        }
         if((s[i]==='o')||(s[i]==='O')){
             console.log(s[i])
            firstHalfCount++
        }
         if((s[i]==='u')||(s[i]==='U')){
            firstHalfCount++
        }
    }
    
    
    for(let i=half;i<s.length;i++){
            if((s[i]==='a')||(s[i]==='A')){
            secondHalfCount++
        }
        if((s[i]==='e')||(s[i]==='E')){
            secondHalfCount++
        }
         if((s[i]==='i')||(s[i]==='I')){
            secondHalfCount++
        }
         if((s[i]==='o')||(s[i]==='O')){
            secondHalfCount++
        }
         if((s[i]==='u')||(s[i]==='U')){
            secondHalfCount++
        }
    }    
    return firstHalfCount===secondHalfCount     
};



var halvesAreAlike = function(s) {
    let newS=s.toLowerCase()
    
    let obj={
        a:'a',
        e:'e',
        i:'i',
        o:'o',
        u:'u'
    }
    
    let count=0;
       
    let half=(s.length)/2;
    
    for(let i=0;i<half;i++){   
        if(obj[newS[i]]){
            count++
        }
    }
    
    
    for(let i=half;i<s.length;i++){
          if(obj[newS[i]]){
            count--
        }
    }    
    return count===0     
};