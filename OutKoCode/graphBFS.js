function graphBFS(graph,start){
    ///instaniate queue
    let queue=new Queue();
    ///hash table to see if it's visited
    let visited={};
    ///track current value
    let current;
    ////track neighbors///
    let neighbors;
    //// if graph has vertex at start//
    if(graph.isVertex(start)){
    ////add start vertex to the graph//
    queue.enqueue(start);
    ///mark start vertex as visited///
    visited[start]=true;  
    }

    ////while loop until queue is empty//
    while(queue.length>0){
        ////update current by dequeuing queue
        current=queue.dequeue();
        ////look at neighbors///
        neighbors=graph.neighbors(current)
        //////look through every single neighbor////
        for(let i=0;i<neighbors.length;i++){
            ///if not visited,  add to queue
            if(!visited[neighbors[i]]){
                queue.enqueue(neighbors[i]);
                visited[neighbors[i]]=true; 
            }
        }




    }


}