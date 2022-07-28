var findCheapestPrice = function(n, flights, src, dst, K) {
    
    const flightsGraph = createGraph(flights);
    const pricesGraph = new Map();
    
    add(pricesGraph, { destination: src, price: 0 });
    let stops = 0;
    let nodes = [[0, flightsGraph.get(src)]];
    for (let stops = 0; stops <= K; stops++) {
        let nextNodes = [];
        
        for (const [extraPrice, flightNodes] of nodes) {
            if (!flightNodes) {
                continue;
            }
            
            for (const { to, price } of flightNodes) {
                const totalPrice = price + extraPrice;
                
                if (!add(pricesGraph, { destination: to, price: totalPrice })) {
                    continue;
                }
                
                nextNodes.push([totalPrice, flightsGraph.get(to)]);
            }
        }
        
        nodes = nextNodes;
    }
    
    return pricesGraph.get(dst) ?? -1;
    
};
    
    
    function add(pricesGraph, { destination, price }) {
    if (!pricesGraph.has(destination)) {
        pricesGraph.set(destination, price);
        return true;
    }
    
    if (pricesGraph.get(destination) <= price) {
        return false;
    }
    
    pricesGraph.set(destination, price);
    return true;
}

function createGraph(flights) {
    const graph = new Map();
    
    for (const [from, to, price] of flights) {
        if (graph.has(from)) {
            graph.get(from).push({ to, price });
            continue;
        }
        
        graph.set(from, [{ to, price }]);
    }
    
    return graph;
}