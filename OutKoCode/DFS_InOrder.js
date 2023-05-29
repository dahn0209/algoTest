function inDFS(root) {
    // Write your code here
       // Write your code here
    ///create state variable 
    let result=[];
    //Instantiate helper method
    function traverse(current){
        ///base case
        if (current===null){
            return
        }
      
        ///recursive cases
        ////left traversal
        traverse(current.left)
        
          ////action----the action will change for pre post and in
        result.push(current.value);
        
        
        ////rigth traversal
        traverse(current.right)
    }
    // Invoke helper method
    traverse(root)
    ///return state variable 
    console.log('result:',result)
    return result
    
}