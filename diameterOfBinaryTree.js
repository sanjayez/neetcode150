var diameterOfBinaryTree = function(root) {
    
    let diameter = 0 // if returning -1, add + 2 to lh and rh

    // i.e, diameter = Math.max(diameter, lh + rh + 2)
    
    const dfs = (node) => {
        if(!node) return 0
        
        let lh = dfs(node.left)
        let rh = dfs(node.right)
        
        diameter = Math.max(diameter, lh + rh)
        
        return Math.max(lh, rh) + 1
    }
    
    dfs(root)
    
    return diameter
    
};