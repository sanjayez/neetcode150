let solveKnapsack = function(profits, weights, capacity) {
    // TODO: Write your code here

    let memo = {}
    let solve = (cap, idx, memo) => {

      let key = cap + ',' + idx
      if(key in memo) return memo[key]
      if(cap <= 0 || idx >= profits.length) return 0
      
      let profit1 = 0
      if(weights[idx] <= cap){
          profit1 = profits[idx] + solve(cap - weights[idx], idx + 1, memo)
      }

      let profit2 = solve(cap, idx + 1, memo)
      
      memo[key] = Math.max(profit1, profit2)
      return memo[key]
    }
  
    return solve(capacity, 0, memo)
  };
  
  var profits = [1, 6, 10, 16];
  var weights = [1, 2, 3, 5];
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);


// Tabular solution
let knapsackTabular = (profits, weights, capacity) => {
  let dp = Array(profits.length).fill(0).map(() => Array(capacity + 1).fill(0))

  for(let i = 0; i < profits.length; i++){
    dp[i][0] = 0
  }

  for(let c = 0; c <= capacity; c++){
    if(weights[0] <= c) dp[0][c] = profits[0]
  }

  for(let i = 1; i < weights.length; i++){
    for(let c = 1; c <= capacity; c++){
      let profit1 = 0
      let profit2 = 0
      if(weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]]
      profit2 = dp[i - 1][c]

      dp[i][c] = Math.max(profit1, profit2)
    }
  }

  return dp[profits.length - 1][capacity]
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(knapsackTabular(profits, weights, 7))
console.log(knapsackTabular(profits, weights, 6))

