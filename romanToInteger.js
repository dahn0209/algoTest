var romanToInt = function(s) {
    
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000   
    };
    
    let num=0;
    
    for(let i=0;i<s.length;i++){
        let current=map[s[i]];
        let next=map[s[i+1]];
        // console.log(`at index ${i},current is ${current}; next is ${next}`)
        
        if(current<next){  ///IV XC. CM. IX
            // console.log(`at index ${i}, current:${current} < next:${next}`)
            num+=(next-current);
            i++;
            // console.log(`skip index ${i},`)
        }else{
            num+=current
        }  
    }
    return num
};