var orangesRotting = function(grid) {
    let queue = [], fresh = 0, time = 0
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] === 1) fresh += 1
            if(grid[r][c] === 2) queue.unshift([r, c])
        }
    }
    
    let dir = {
        0: [0, +1],
        1: [0, -1],
        2: [+1, 0],
        3: [-1, 0]
    }
    
    while(queue.length !== 0 && fresh){
        let rotten = queue.length
        for(let i = 0; i < rotten; i++){
            let [r, c] = queue.pop()
            for(let d in dir){
                let [dr, dc] = dir[d]
                let row = r + dr
                let col = c + dc
                let rowInBounds = 0 <= row && row < grid.length
                let colInBounds = 0 <= col && col < grid[0].length
                
                if(!rowInBounds || !colInBounds) continue
                
                if(grid[row][col] !== 1) continue
                grid[row][col] = 2
                fresh -= 1
                queue.unshift([row, col])
            }
        }
        time += 1
    }
    
    return fresh > 0 ? -1 : time
};