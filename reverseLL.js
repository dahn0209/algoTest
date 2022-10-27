var reverseList = function(head) {
    //////variable that equal to null////
    
    let nodeVariable=null;
    let nodeVariable2=null;
    
    ///use while loop where head is not equal to null///
    
    while(head!==null){
        ///define nodeVariable as head from parameter
        nodeVariable=head;
        ////change head to head.next which is the next node///
        head=head.next;
        nodeVariable.next=nodeVariable2;
        nodeVariable2=nodeVariable;
    }
    
    return nodeVariable2;
    
    
};