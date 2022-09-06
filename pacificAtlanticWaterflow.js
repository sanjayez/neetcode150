var pacificAtlantic = function(heights) {
    let pac = new Set(), atl = new Set(), res = []
    
    let rows = heights.length
    let cols = heights[0].length
    
    let dfs = (grid, r, c, visited, prev) => {
        let rowInBounds = 0 <= r && r < grid.length;
        let colInBounds = 0 <= c && c < grid[0].length;
        
        if(!rowInBounds || !colInBounds) return
        if(grid[r][c] < prev) return
        
        let pos = r + ',' + c
        if(visited.has(pos)) return
    
        visited.add(pos)
        
        dfs(grid, r + 1, c, visited, grid[r][c])
        dfs(grid, r - 1, c, visited, grid[r][c])
        dfs(grid, r, c + 1, visited, grid[r][c])
        dfs(grid, r, c - 1, visited, grid[r][c])
    }
    
    for(let r = 0; r < rows; r++){
        dfs(heights, r, 0, pac, heights[r][0])
        dfs(heights, r, cols - 1, atl, heights[r][cols - 1])
    }
    
    for(let c = 0; c < cols; c++){
        dfs(heights, 0, c, pac, heights[0][c])
        dfs(heights, rows - 1, c, atl, heights[rows - 1][c])
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            let pos = r + ',' + c
            if(pac.has(pos) && atl.has(pos)){
                res.push([r, c])
            }
        }
    }
    return res
};