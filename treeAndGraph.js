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


// undirected graph
//         3
//        /
//       1-------2
//             /
//            4


// directed graph     //this is like a tree
//           3
//         /   ^
//        /     \
//       v       \
//       1------->2
//               /
//               v
//               4

// how do we represent graph?

// Adjacency Matrix//advantage:you can easily see conection between two vertices
//-A lookup table often implemented as a two-dimensional array where a value
//of 1 represents an edge that exists and 0 represents an edge that does not
//exist
                        //  const adjMatrix=[
                        //      /*1 2 3 4*/
                        // /*1*/ [0,1,1,0],
                        // /*2*/ [1,0,0,1],
                        // /*3*/ [1,0,0,0],
                        // /*4*/ [0,1,0,0]
                        //  ]
//   3
//  /
// 1------2
//       /
//      4

////Adjacency List/////advantage: This saves more space than adjancy matrix
// -Often implemented as a key-value pair where the key represents the vertex
// and the value is a list/array of the neighboring vertices
                // const adjList={
                //   1:[2,3],
                //   2:[1,4],
                //   3:[1],
                //   4:[2]
                // }
//   3
//  /
// 1------2
//       /
//      4

// 'weighted' Graphs vs 'unweighted'

/////-weighted graphes have numbers on connection and edges

//                    3
//               7  /
               // /     10
//               1-----------2
//                          /
//                         /  2
//                        4

//////'Cyclic Graph------this is a weighted cyclic graph

//                    3
//               7  /   \ 5
//                 /  10 \
//               1---------2
//                        /
//                       /  2
//                      4




/////Graph Traversal


///Breadth-First Traversal
// -We will need a queue(FIFO)
//   1. Add a vertex form the grpah to a queue of vertices to be seen and mark it as seen.

//   2. Visit the vertex in the front of the queue
//   3. If that vertex has any neighbors, check to see if they have been seen
//   and mark them
//   4. Add any neighboring vertices that still need to be seen to the back of the
//   queue
//   5. Process the vertex at the front of the queue
//   6. Repeat 2-4 until we've exhausted the list of vertices

// -Travels level by level
// -Implemented with a quueue
// -Useful in finding the shortest path

///Depth-First Traversal
// -We will need a stack(LIFO)
// 1. Add a vertex from the graph to the top of the stack
// 2. Mark that vertex as visited
// 3. Pop vertex off the top of the stack
// 4. Check if that vertex has any neighbots
// 5 .If those neighbors have not been visited, push them onto the stack
// 6. Process what's on top of the stack
// 7. Repeat steps 3-6 until exhausted all vertices

// -Travels down a single path, one child node at a time
// -May be implemented with a stack
// -Useful in finding path existence
//   -useful for backtracking(recursivley trying to build a solution one piece at a time by remv)



