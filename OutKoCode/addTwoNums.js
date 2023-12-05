// """
  
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// """


///create three variable 
///one for carryover  let carryover=0;
///one for looking at previous node let previousNode=new ListNode()
////one for headnode  let headNode=previousNode

///while loop both linked List and carry variable
    /////to add value of l1, make new variable let val1=0;
    ////to add value of l2, make new variable let val2=0;

    ////if(l1)-->traverse through value and add val number
        //////equal l1.val to val1--> val1=l1.val;
        ///traverse l1--->l1=l1.next;

    ////if(l2)-->traverse through value and add val number    
        //////equal l2.val to val2--> val2=l2.val;
        //////traverse l2--->l2=l2.next;

    ///create sum variable-->let sum=val1+val2+carryover;

    ////dealing with carrtover
          ////if(sum>9)-->carryover=1 
          ////else-->carryover=0;

  ///deal with number over 9///
    ///maket new variable where sum %10-->let newSum=sum%10

  ///make new list with newSum-->let curentNode=new ListNode(newSum);
  ///make previousNode.next=curretNode;
  ///make previousNode=curretNode
    
///return headnode



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
  
  
  
  function addtwo(l1,l2){
  
    ///create three variable 
    ///one for carryover  let carryover=0;
    let carryover=0;
    ///one for looking at previous node let previousNode=new ListNode()
    let previousNode=new ListNode();
    ////one for headnode  let headNode=previousNode
    let headNode=previousNode;
  
    ///while loop both linked List and carryover variable
    while(l1||l2||carryover){
      /////to add value of l1, make new variable let val1=0;
      let val1=0
      ////to add value of l2, make new variable let val2=0;
      let val2=0
      
        ////if(l1)-->traverse through value and add val number
      if(l1){
        //////equal l1.val to val1--> val1=l1.val;
        val1=l1.val;
        ///traverse l1--->l1=l1.next;
        l1=l1.next;
      }
      
      ////if(l2)-->traverse through value and add val number    
      if(l2){
        //////equal l2.val to val2--> val2=l2.val;
        val2=l2.val;
        ///traverse l2--->l2=l2.next;
        l2=l2.next;
      }
  
      ///create sum variable-->let sum=val1+val2+carryover;
      let sum=val1+val2+carryover;
      console.log('sum->',sum)
      
      ////dealing with carryover
            ////if(sum>9)-->carryover=1 ;
      if(sum>9){
        carryover=1
      }else{
        ////else-->carryover=0;
        carryover=0
      }
      
  
      ///deal with number over 9///
      //maket new variable where sum %10-->let newSum=sum%10
      let newSum=sum%10;
  
      ///make new list with newSum-->let curentNode=new ListNode(newSum);
      let currentNode=new ListNode(newSum);
      ///make previousNode.next=curretNode;
      previousNode.next=currentNode;
      ///make previousNode=curretNode
      previousNode=currentNode;
    }
    
        
    return headNode.next
  
  
    
  }
  
  let l1 = [2,4,3]; 
  let l2 = [5,6,4]
  
  console.log(addtwo(l1,l2))