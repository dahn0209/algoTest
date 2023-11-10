
/*
 * Complete the 'reverseLinkedList' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST node as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverseLinkedList(node) {
    // Write your code here
    let previous=null;
    let current=node;   ///head
    let reference;
    
    while(current!==null){
        reference=current.next;
        current.next=previous;
        previous=current;
        current=reference
    }
    console.dir(previous)
    return previous////return previous beccause previous at end
    
    
}