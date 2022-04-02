/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// var addTwoNumbers = function(l1, l2) {
//     const arr1 = [];
//     const arr2=[];
//     let firstNum='';
//     let secNum=''
//     let headl1 = l1;
//     let headl2=l2

//     while (headl1 !== null) {
//         arr1.push(headl1.val);
//         headl1 = headl1.next;
//     }

//     while (headl2 !== null) {
//         arr2.push(headl2.val);
//         headl2 = headl2.next;
//     }

// console.log('arr1=>',arr1,'arr2=>',arr2);

//     for(let i=arr1.length-1;i>=0;i--){
//         firstNum+=arr1[i]
//     }

//     for(let j=arr2.length-1;j>=0;j--){
//         secNum+=arr2[j]
//     }
// // console.log('firstNum=>',firstNum,'secNum=>',secNum);
//     firstNum=parseInt(firstNum);
//     secNum=parseInt(secNum);
//     let sum=firstNum+secNum;
//     // console.log('sum=>',sum);
//     sum=sum.toString();
//     // console.log('sumStr=>',sum.split(''))
//     let sumStr=sum.split('');

//     let finalArr=[]


//     for(let i=sumStr.length-1;i>=0;i--){
//         let eachNumParse1=parseInt(sumStr[i]);
//         // console.log('eachNumParse1=>',eachNumParse1,'eachNumParse2=>',eachNumParse2);
//         finalArr.push(eachNumParse1);
//     }

//     console.log('finalArr=>',finalArr)

//     let previousNode=new ListNode();
//     let headNode=previousNode;

//     for(let eachNum of finalArr){
//          let currentNode=new ListNode(eachNum);
//         previousNode.next=currentNode;
//         previousNode=currentNode
//     }

//     console.log('headNode.next=>',headNode.next)
//     return headNode.next;

// };



var addTwoNumbers = function(l1, l2) {
    console.log('li=>',l1,'l2=>',l2)
    //traverse linkedlist with while loop
    //this code happens edge case when linkedlists are different length

    let carry=0////to get for sum that gets carried out ex. 1+9=10
    ///carry!==0 deal with when 99+1=100;
    //a previousNode variable that keeps track of previous node
    let previousNode = new ListNode();
    ///define a headNode as pointer for currentNode and previousNode
    const headNode=previousNode;
    while(l1!==null||l2!==null||carry!==0){
          ///variable to get value of each node
        let val1=0;
        let val2=0
        if(l1!==null){
            //getting the value of l1
            val1=l1.val
            ///update l1 to next node
            l1=l1.next
        }
        if(l2!==null){
        //getting the value of l2
            val2=l2.val
        ///update l2 to next node
            l2=l2.next
        }
        //getting the sum of val1 and val2///
        let sum=val1+val2+carry;
        ///this deal with carry over when sum goes over 9
        // carry=sum>9?1:0
        //or/////
        carry=Math.floor(sum/10);
        let digit=sum%10;///the digit gets result
        console.log('digit=>',digit)
        console.log(`${val1}+${val2}=${sum}`)
        const currentNode=new ListNode(digit);
        previousNode.next=currentNode;
        previousNode = currentNode
    }
    console.log('headNode.next=>',headNode.next);

    return headNode.next
};
