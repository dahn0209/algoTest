var mergeTwoLists = function(l1, l2) {
    const dummy=new ListNode(-Infinity);
    let prev=dummy; ////referecne to dummy

    while(l1&&l2){
        if(l1.val<=l2.val){
            prev.next=l1;
            prev=l1;
            l1=l1.next
        }else{
              prev.next=l2;
            prev=l2;
            l2=l2.next
        }
    }

    if(!l1){
        prev.next=l2
    }
     if(!l2){
        prev.next=l1
    }

    return dummy.next
};




var mergeTwoLists = function(list1, list2) {

    let current=new ListNode();
    let dummy=current
    console.log(JSON.stringify(current))
    console.log(JSON.stringify(dummy))
    console.log(JSON.stringify(list1));
    console.log(JSON.stringify(list2))

    while(list1&&list2){
        if(list1.val<list2.val){
            current.next=list1;
            list1=list1.next
        }else{
            current.next=list2;
            list2=list2.next
        }
        current=current.next
    }

    if(list1){
        current.next=list1
    }
    if(list2){
        current.next=list2
    }

    console.log('current after=>',JSON.stringify(current));
    console.log('dummy after=>',JSON.stringify(dummy));
    console.log('list1 after=>',JSON.stringify(list1));
    console.log('list2 after=>',JSON.stringify(list2))
    return dummy.next
    
};