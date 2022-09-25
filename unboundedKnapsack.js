// My version, written on my own

let solveKnapsack = function(profits, weights, capacity) {
  // TODO: Write your code here
  
  if(profits.length !== weights.length) return false
  if(!profits || !weights || !capacity) return false

  let Tprofit = 0;

  const fillknapsack = (cap) => {
      if(cap === 0) return 0

      let profit = 0
      for(let i = 0; i < weights.length; i++){
          if(weights[i] <= cap){
              let profitTemp = profits[i] + fillknapsack(cap - weights[i])
              profit = Math.max(profit, profitTemp)
          }
      }

      return profit
  }

  for(let i = 0; i < weights.length; i++){
      if(weights[i] <= capacity){
          let profit = profits[i] + fillknapsack(capacity - weights[i])
          Tprofit = Math.max(profit, Tprofit)
      }
  }

  return Tprofit
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`);
