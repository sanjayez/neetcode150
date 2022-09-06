// slow but I wrote this on my own
// if memoised, can run much faster

// Backtracking

var permute = function(nums) {
    let res = [], stack = [], set = new Set()
    
    const permutations = (idx, arr) => {
        if(stack.length === nums.length){
            res.push([...stack.slice()])
            return
        }    
        
        for(let i = 0; i < nums.length; i++){
            // if(i === idx) continue
            if(set.has(nums[i])) continue
            
            stack.push(nums[i])
            set.add(nums[i])
            
            permutations(i, nums)
            
            set.delete(nums[i])
            stack.pop()
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        stack.push(nums[i])
        set.add(nums[i])
        
        permutations(i, nums)
        
        set.delete(nums[i])
        stack.pop()
    }
    
    return res
};