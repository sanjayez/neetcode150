// You are given an m x n integer matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// let matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   target = 3;

// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ],
//   target = 13;

// let matrix = [[1], [3]],
//   target = 0;
let matrix = [[1], [3]],
  target = 1;

const searchMatrix = (matrix, target) => {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bottom] = [0, rows - 1];

  while (top <= bottom) {
    let row = Math.floor((top + bottom) / 2);
    if (target < matrix[row][0]) bottom = row - 1;
    else if (target > matrix[row][cols - 1]) top = row + 1;
    // found the row
    else break;
  }

  // if the entire matrix is searched and not found
  if (!(top <= bottom)) return false;

  let l = 0,
    r = cols - 1;
  let row = Math.floor((top + bottom) / 2);
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === matrix[row][mid]) return true;
    else if (target < matrix[row][mid]) r = mid - 1;
    else if (target > matrix[row][mid]) l = mid + 1;
  }

  return false;
};

console.log(searchMatrix(matrix, target));
