
/*
 * Complete the 'printForward' function below.
 *
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

function printForward(node) {
    // Write your code here
    let current=node;
    
    while(current!==null){
        console.log(current.data)
        current=current.next;
    }
    

}
