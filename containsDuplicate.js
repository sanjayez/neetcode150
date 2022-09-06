// ARRAYS and HASHING

// Have a map to check if an element was already encountered

const containsDuplicate = (nums) => {
    let check = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in check) return true
        check[nums[i]] = i
    }
    return false
}