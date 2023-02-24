var hasCycle = function(head) {
    ///fast pointer 2 steps. slow pointer 1 step
    let fast=head;
    let slow=head;

    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next

        if(fast===slow){
            return true
        }
    }

    return false
    
};