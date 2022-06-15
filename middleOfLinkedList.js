var middleNode = function(head) {

    let current=head
    let length=0;
    ///calculate the length////
    while(current){

        current=current.next;
        length++;
    }

    if(length<=1){
        return head
    }

    let middleLength=Math.round(length/2)
    let secCurrent=head;
    ///increment length down until it reaches same num as middleLength
    while(secCurrent){

        secCurrent=secCurrent.next;
        length--
        if(length===middleLength){
            return secCurrent
        }
    }

};


var middleNode = function(head) {
    let fast=head;
    let slow=head;

    while(fast && fast.next){
        fast=fast.next.next;   ///2x fast
        slow=slow.next  ///regular loop
    }
    return slow
};
