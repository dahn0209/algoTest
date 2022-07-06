function bracketMatch(text) {
  // your code goes here
  let stack=[];
  let parens="()";
  let i=0;

  while(i<text.length){
      stack.push(text[i])
        i++;  ///increment by
        ///grab last two of stack
        let open=stack[stack.length-2];
        let close=stack[stack.length-1];
        ///is it valid palrenthesis
        let gotParens=open+close;

        if(parens.includes(gotParens)){
            stack.pop();
            stack.pop();
        }
    }
  return stack.length
}


function bracketMatch(text) {
  // your code goes here
  let diffCounter=0;
  let ans=0;

  for(let i=0;i<text.length;i++){
    if(text[i]==='('){
      diffCounter++
    }else if( text[i]===')'){
    diffCounter--
    }
    if(diffCounter<0){
      diffCounter++;
      ans++
    }
  }
  return ans+diffCounter
}

function bracketMatch(text) {
  // your code goes here
  let stack=[];
  let parens="()";

  for(let i=0;i<text.length;i++){
      stack.push(text[i])
      console.log('dee=>',stack)
        //grab last two element of stack
        let open=stack[stack.length-2];
        let close=stack[stack.length-1];
        ///is it valid palrenthesis
        let gotParens=open+close;
        console.log('gotParens=>',gotParens)

        if(parens.includes(gotParens)){
            stack.pop();
            stack.pop();
        }
    }


  return stack.length


}
