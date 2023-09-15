// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.

// Example 1:

// Input:
// target = 12,
// position = [10,8,0,5,3],
// speed = [2,4,1,1,3]

// Output: 3

// position = [10,8,0,5,3], speed = [2,4,1,1,3]
// [[10, 2], [8, 4], [0, 1], [5, 1], [3, 3]] => [[10, 2], [8, 4], [5, 1], [3, 3], [0, 1]] ; time = distance / speed
// time = (target - curr) / speed ; if time for any element is less or equal to top, skip; else push on to stack
//
// stack = [3, 7, 1]
//
// no of fleets = length of stack

let target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

const carFleet = (target, posiiton, speed) => {
  let states = posiiton
    .map((p, idx) => [p, speed[idx]])
    .sort((a, b) => b[0] - a[0]);

  let stack = [],
    top = -1;

  states.forEach((state) => {
    let pos = state[0],
      currSpeed = state[1];
    let eta = (target - pos) / currSpeed;

    if (!stack[top] || eta > stack[top]) {
      stack.push(eta);
      top++;
    }
  });

  return stack.length;
};

console.log(carFleet(target, position, speed));
