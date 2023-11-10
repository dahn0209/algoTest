'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}



/*
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER a
 *  3. INTEGER b
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

function swapNodes(head, a, b) {
    // Write your code here
    let ph=new SinglyLinkedList(null);
    ph.next=head;
    let current=head;
    let parent=ph;
    let currA;
    let parentA;
    let currB;
    let parentB;

    while(current!==null){
   
        if(current.data===a && currA===undefined){  ///if we find the a node
            currA=current;
            parentA=parent;
        }
        if(current.data===b && currB===undefined){  ///if we find the a node
            currB=current;
            parentB=parent;
        }
    
        current=current.next;
        parent=parent.next
    }
    if(currA===undefined||currB===undefined){
        return ph.next
    }
    
    parentB.next=currA;
    parentA.next=currB;
    
    let ref=currA.next;
    currA.next=currB.next;
    currB.next=ref;
    
    return ph.next
}