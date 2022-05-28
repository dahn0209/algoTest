//stack  data structure
var isValid = function(s) {

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
