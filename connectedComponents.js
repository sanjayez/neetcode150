var countComponents = function(n, edges) {
    let graph = buildGraph(edges)  
    let visited = new Set(), queue = [], count = 0
    
    // Outer loop to traverse between islands
    for(let i = 0; i < n; i++){
        
        if(visited.has(i)) continue
        
        // scattered islands
        if(!(i in graph)){
            count += 1
            continue
        }
        
        // BFS for unexplored islands
        queue.unshift(i)
        
        while(queue.length){
            let node = queue.pop()
              
            if(visited.has(node)) continue
            visited.add(node)
  
            for(let nei of graph[node]){
                queue.unshift(nei)
            }
        }
        
          count += 1  
    }
    
      return count
  };
  
  const buildGraph = (edges) => {
      let map = {}
      for(let edge of edges){
          let [a, b] = edge
          if(!(a in map)) map[a] = []
          if(!(b in map)) map[b] = []
          
          map[a].push(b)
          map[b].push(a)
      }
      
      return map
  }