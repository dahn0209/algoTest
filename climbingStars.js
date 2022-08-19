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
