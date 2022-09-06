// Dynamic Programming

var climbStairs = function(n) {
    let first = 1
    let second = 2
    if(n === 1) return first
    if(n === 2) return second
    let stairs = []
    stairs[1] = first
    stairs[2] = second
    
    for(let i = 3; i <= n; i++){
        stairs[i] = stairs[i - 1] + stairs[i - 2]
    }
    
    return stairs[n]
};

// My Version of recursive approach without memoization
// works, requires memoisation Aug 24, 2022

// var climbStairs = function(n) {
    
//     if(n === 0) return 0
    
//     let count = 0, stack = []
    
//     let climb = (sum) => {
//         if(sum === n){
//             count += 1
//             return
//         }
        
//         if((sum + 1) <= n){
//             stack.push(1)
//             climb(sum + 1)
//             stack.pop()
//         }
        
//         if((sum + 2) <= n){
//             stack.push(2)
//             climb(sum + 2)
//             stack.pop()
//         }
//     }
    
//     stack.push(1)
//     climb(1)
//     stack.pop()
    
//     stack.push(2)
//     climb(2)
//     stack.pop()
    
//     return count
// };