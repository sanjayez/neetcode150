// Recursion, backtracking, stack

var generateParenthesis = function(n) {
    let res = [], stack = []
    
    let backtrack = (open, close) => {
        if(open === n && close === n){
            res.push(stack.join(''))
            return
        }
        
        if(close < open){
            stack.push(')')
            backtrack(open, close + 1)
            stack.pop()
        }
        
        if(open < n){
            stack.push('(')
            backtrack(open + 1, close)
            stack.pop()
        }
    }
    
    backtrack(0, 0)
    
    return res
};