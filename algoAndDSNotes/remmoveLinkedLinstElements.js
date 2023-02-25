var removeElements = function(head, val) {

    let dummy=new ListNode(-1);
    dummy.next=head;
    let prev=dummy;
    let current=head;

    while(current){
        if(current.val===val){
            prev.next=current.next;
            current=current.next/////this is how you increment current ////
        }else{
            ///increment prev//
            prev=current;
            ///increment current//
            current=current.next
        }
    }
    return dummy.next
    
};