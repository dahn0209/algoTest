/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {


    let dummy=new ListNode(-Infinity,head);
    let cur=head;
    let prev=dummy;

    while(cur){
        if(cur.val===prev.val){
            while((cur&&cur.val)===prev.val){
                cur=cur.next /////increment current
            }
            ///update previous
            prev.next=cur;
        }else{
            prev=cur;///increment previous;
            cur=cur.next////incrment current
        }
    }
    return dummy.next
};