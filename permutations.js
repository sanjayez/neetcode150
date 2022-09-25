var permute = function(nums) {
    let stack = [], result = []
    
    let permutes = (arr) => {
        if(arr.length === 1) {
            stack.push(arr[0])
            result.push(stack.slice())
            stack.pop()
            return
        }
        
        for(let i = 0; i < arr.length; i++){
            let rem = arr.slice(0, i)
            rem = rem.concat(arr.slice(i + 1))  // concat doesn't change the array, hence have to re-assign
            stack.push(arr[i])
            permutes(rem)
            stack.pop()
        }
    }
    
    permutes(nums)
    
    return result
};