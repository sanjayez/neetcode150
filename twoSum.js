// ARRAY AND HASHING

// Have a map to check if the difference exits in map
// diff = target - current_number

const twoSum = (nums, target) => {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(diff in map) return [i, map[diff]]
        map[nums[i]] = i
    }
}