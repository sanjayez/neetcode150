// i = 0, j = i + 1
// days = 0
// while(t[i] > t[j]) days += 1
// out[i] = days 

//  O(n^2) operation
// var dailyTemperatures = function(temperatures) {
//     let output = []
//     for(let i = 0; i < temperatures.length; i++){
//         let j = i + 1, days = 1
//         while(temperatures[i] >= temperatures[j] && j < temperatures.length){
//             days += 1
//             j += 1
//         }
//         output[i] = j < temperatures.length ? days : 0
//     }
//     return output
// };


// O(n)
// const dailyTemperatures = (temperatures) => {
//   let ans = new Array(temperatures.length).fill(0);
//   let stack = [[temperatures[0], 0]];
//   for (let i = 1; i < temperatures.length; i++) {
//     let curr = temperatures[i];
//     while (stack.length && curr > stack[stack.length - 1][0]) {
//       ans[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
//       stack.pop();
//     }
//     stack.push([curr, i]);
//   }

//   return ans;
// };

const dailyTemperatures = (temperatures) => {
  let ans = new Array(temperatures.length).fill(0);
  let stack = [[temperatures[0], 0]];
  for (let i = 1; i < temperatures.length; i++) {
    let curr = temperatures[i];
    while (stack.length) {
      let [val, idx] = stack[stack.length - 1];
      if (curr > val) {
        ans[idx] = i - idx;
        stack.pop();
      } else break;
    }
    stack.push([curr, i]);
  }
  return ans;
};

// Easier to read version
var top = function(a) {
    return a[a.length - 1];
}

var dailyTemperatures = function(temperatures) {
    let stack = [], ans = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[top(stack)] < temperatures[i]) {
            let index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};
