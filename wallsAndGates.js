var wallsAndGates = function(rooms) {
    let rows = rooms.length
    let cols = rooms[0].length
    let queue = [], distance = 1, INF = (2 ** 31) - 1
    let dir = {
        0: [0,  1],
        1: [0, -1],
        2: [1,  0],
        3: [-1, 0],
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(rooms[r][c] === 0) queue.unshift([r, c])
        }
    }
    
    while(queue.length){
        let gates = queue.length
        for(let i = 0; i < gates; i++){
            let [r, c] = queue.pop()
            for(let d in dir){
                let [dr, dc] = dir[d]
                let row = r + dr
                let col = c + dc
                
                let rowInBounds = 0 <= row && row < rows
                let colInBounds = 0 <= col && col < cols
                
                if(!rowInBounds || !colInBounds) continue
                
                // checking for rooms[r][c] > 0 will create an infinite loop
                // because if encountered a previous cell that is already updated with distance 
                // this statement will skip
                // check for only rooms = INF
                if(rooms[row][col] !== INF) continue
                
                rooms[row][col] = distance
                
                queue.unshift([row, col])
            }
        }
        
        distance += 1
    }
    
    return rooms
};