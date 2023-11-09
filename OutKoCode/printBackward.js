function traverse(current){
    if(current===null){
        return;
    }
    
    traverse(current.next);
    console.log(current.data)
}

function printBackward(node) {
    // Write your code here
    
    traverse(node)

}