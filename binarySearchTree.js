// INSERTING A NODE
// Steps - Iteratively or Recursively

//////////////////////// Create a new node
// Starting at the root
// Check if there is a root, if not - the root now becomes that new node!
// If there is a root, check if the value of the new node is greater than or less than the value of the root
// If it is greater
// Check to see if there is a node to the right
// If there is, move to that node and repeat these steps
// If there is not, add that node as the right property
// If it is less
// Check to see if there is a node to the left
// If there is, move to that node and repeat these steps
// If there is not, add that node as the left property


//////////////////////// Finding a Node in a BST
// Steps - Iteratively or Recursively
// Starting at the root
// Check if there is a root, if not - we're done searching!
// If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
// If not, check to see if the value is greater than or less than the value of the root
// If it is greater
// Check to see if there is a node to the right
// If there is, move to that node and repeat these steps
// If there is not, we're done searching!
// If it is less
// Check to see if there is a node to the left
// If there is, move to that node and repeat these steps
// If there is not, we're done searching!

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
  // Create a new node
    let newNode=new Node(value);
  // Starting at the root
  //// Check if there is a root, if not - the root now becomes that new node!
    if(!this.root){
      this.root=newNode;
      // console.log('newRoot=>',this.root)
      return this
    }
////If there is a root, check if the value of the new node is greater than or less than the value of the root
    let current=this.root
    while(true){
      if(value===current.value){
        return undefined;
      }
// If it is less
      if(value<current.value){
////Check to see if there is a node to the left
//////If there is not, add that node as the left property
        if(!current.left){
          current.left=newNode;
          return this;
        }else{
//////If there is, move to that node and repeat these steps
          current=current.left
        }
      }
// If it is greater
      else if(value>current.value){
//// Check to see if there is a node to the right
//////If there is not, add that node as the right property
        if(!current.right){
          current.right=newNode;
          return this;
        }else{
////// If there is, move to that node and repeat these steps
          current=current.right
        }
      }
    }
  }
  find(value){
// Starting at the root
//// Check if there is a root, if not - we're done searching!
    if(!this.root){
      return false
    }
//// If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    if(value===this.root.value){
      return true
    }
//// If not, check to see if the value is greater than or less than the value of the root
    let current=this.root;
    let found=false

    while(current && !found){
////If it is greater
//////Check to see if there is a node to the right
      if(value>current.value){
//////If there is not, we're done searching!
        // if(!current.right){
        //   return true
        // }else{
//////If there is, move to that node and repeat these steps
          current=current.right
        // }
      }
////If it is less
//////Check to see if there is a node to the left
      else if(value<current.value){
//////If there is not, we're done searching!
        // if(!current.left){
        //   return true
        // }else{
////// If there is, move to that node and repeat these steps
        current=current.left
      // }
      }else{
        found=true
      }
    }
  return found
  }

}

//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10)
console.log('tree10=>',tree)
tree.insert(5);
console.log('tree5==>',tree)
tree.insert(13);
console.log('tree13==>',tree)
tree.insert(11);
console.log('tree11==>',tree)
tree.insert(2)
console.log('tree2==>',tree)
tree.insert(16)
console.log('tree16==>',tree)
tree.insert(7);
console.log('treeResult7=>',tree)
tree.find(10)
console.log('find==>',tree.find(2))
