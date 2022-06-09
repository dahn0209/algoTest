const isValid =(s)=> {

    let stack=[];
    let parens="()[]{}";
    let i=0;

    while(i<s.length){
      stack.push(s[i])
        i++;
        let open=stack[stack.length-2];
        let close=stack[stack.length-1];
        ///is it valid palrenthesis
        let gotParens=open+close;

        if(parens.includes(gotParens)){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length===0
};


////treee  //dfs//
var generateParenthesis = function(n) {
    //global result//
    const result=[];

    //dfs recursive helper//
    const dfs=(i,n,slate)=>{
        if(i===n*2){
            if(isValid(slate.join(''))){
                result.push(slate.join(''))
            }
            return
        }
        ///dfs recursive call//

        //add open parenthesis//
        slate.push('(');
        dfs(i+1,n,slate);
        slate.pop()
        //add closed parenthesis
          slate.push(')');
        dfs(i+1,n,slate);
        slate.pop()
    }
   dfs(0,n,[])
    return result
};


////treee  //dfs//
var generateParenthesis = function(n) {
    //global result//
    const result=[];

    //dfs recursive helper//
    const dfs=(i,n,slate,oCount,cCount)=>{
        ///backtracking case///
        if(oCount>n) return
        if(cCount>oCount) return

        ///base case///
        if(i===n*2){
            result.push(slate.join(''))
            return
        }
        ///dfs recursive call//

        //add open parenthesis//
        slate.push('(');
        dfs(i+1,n,slate,oCount+1,cCount);
        slate.pop()
        //add closed parenthesis
          slate.push(')');
        dfs(i+1,n,slate,oCount,cCount+1);
        slate.pop()
    }

   dfs(0,n,[],0,0)
    return result


};
