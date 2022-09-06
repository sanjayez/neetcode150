// the O's at the boundaries cannot be surrounded by X's hence mark all the O's at the boundaries of the board
// that means any remaining O's must be surrounded by X's, amrk remaining O's to be X's
// unmark all the T's to O's and return the grid

var solve = function(grid) {
    let rows = grid.length - 1
    let cols = grid[0].length - 1
    let visited = new Set()
    
    let dfs = (grid, r, c, visited) => {
        let rowInBounds = 0 <= r && r <= rows
        let colInBounds = 0 <= c && c <= cols
        
        if(!rowInBounds || !colInBounds) return
        
        if(grid[r][c] !== 'O') return
        
        let pos = r + ',' + c
        if(visited.has(pos)) return
        
        visited.add(pos)
        grid[r][c] = 'T'
        
        dfs(grid, r + 1, c, visited)
        dfs(grid, r - 1, c, visited)
        dfs(grid, r, c - 1, visited)
        dfs(grid, r, c + 1, visited)
        
        return
    }
    
    for(let r = 0; r <= rows; r++){
        dfs(grid, r, 0, visited)
        dfs(grid, r, cols, visited)
    }
    
    for(let c = 0; c <= cols; c++){
        dfs(grid, 0, c, visited)
        dfs(grid, rows, c, visited)
    }
    
    for(let r = 0; r <= rows; r++){
        for(let c = 0; c <= cols; c++){
            let curr = grid[r][c]
            switch(curr){
                case 'O':
                        grid[r][c] = 'X';
                        break;
                case 'T':
                        grid[r][c] = 'O';
                        break;
            }
        }
    }
        
    return grid
};
