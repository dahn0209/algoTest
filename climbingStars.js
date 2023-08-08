var climbStairs = function(n) {

    const memo=[1,1,2];

    for(let i=3;i<=n;i++){
        memo[i]=memo[i-1]+memo[i-2]
    }

    return memo[n]

};


var climbStairs = function(n) {
    
    const memo=[1,1];
    
    for(let i=2;i<=n;i++){
       const result=memo[0]+memo[1];
        memo[0]=memo[1];
        memo[1]=result
    }
    return memo[1]
    
};


var climbStairs = function(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }
    let step1 = 1; 
    let step2 = 1;

    while(n > 1) {
      let next = step1 + step2;
      step2 = step1;
      step1 = next;
      n--;
    }
    return step1;
}

