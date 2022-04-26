var lengthOfLastWord = function(s) {
    let strArr=s.split(' ');
    let newArr=[]
    
    for(let eachEl of strArr){
        if(eachEl!==''){
            newArr.push(eachEl)
        }
    }
        
    return newArr[newArr.length-1].length
         
};

var lengthOfLastWord = function(s) {
    let strTrim=s.trim();
    return strTrim.length-strTrim.lastIndexOf(' ')-1
         
};