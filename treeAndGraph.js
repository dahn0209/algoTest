// The Tree ADT
// -Node contain values(s)
// -A primary 'root' node
// -Children are subtrees(recursive);
// -No duplicated children (cycle); trees can branch but never converge
// -Final Nodes called 'leaves';
// -Height of tree=longest path to leaf
// -Level=1+number og jumps to root
// -Depth=inverse of height

// -Root
//   -topmost mode of tree

// -Child
//   -any node that has a parent

// -parent
//   -any node that has a reference to another node

// -sibling
//   -any group of nodes that are children of the same node

// -leaf
//   -any node that doesn't have a child node in the tree


// Traversal:visting every node

// -Breadth-frist search(level by level)

// -Depth-frsth search(branch by branch)/////This deals with binary trees
////-Pre-order:process ROOT NODE, process LEFT SUBTREE, process RIGHT SUBTREE
////-In-order: process LEFT SUBTREE,process ROOT NODE, process RIGHT SUBTREE
////-Post-order: process LEFT SUBTREE, process RIGHT SUBTREE,process ROOT NODE

// -process:access on a particular Node

// N-ary Trees
// -An n-ary tree is a rooted tree in which each node has no more than N children
//- The example on the left is a 3-ary tree  ////at most 3 children

                  //      A
                  //    / | \
                  //   /  |  \
                  //  B   C   D
                  //     / \  |
                  //    E   F G

// -Breadth-frist search(level by level)
                  //      A               A,B,C,D,E,F,G
                  //    / | \
                  //   /  |  \
                  //  B   C   D
                  //     / \  |
                  //    E   F G
// -Depth-frsth search(branch by branch)/////This deals with binary trees
////-Pre-order:vist ROOT NODE first ,then traverse SUBTREE
                  //      A         A,B,C,E,F,D,G,
                  //    / | \
                  //   /  |  \
                  //  B   C   D
                  //     / \  |
                  //    E   F G
////-Post-order:traverse the SUBTREE first,then visit ROOT NODE
                  //      A
                  //    / | \         B,E,F,C,G,D,A
                  //   /  |  \
                  //  B   C   D
                  //     / \  |
                  //    E   F G


// Tree Case Studies

// -The DOM

// -Directory structure

// -How programs get read/parsed (Parse Tree/Abstract Syntax Tree)


////////Graph//////////

// Vertex                               Vertex
//                   edge
//   1------------------------------------2

// vertices:nodes, elelements, items
// edges: links connections, relationship
