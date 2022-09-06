var search = function(nums, target) {
    let i = 0, j = nums.length - 1;
    while(i <= j){
        let mid = Math.floor((i + j) / 2)
        if(nums[mid] === target) return mid
        if(target > nums[mid]){
            i = mid + 1
        }
        if(target < nums[mid]){
            j = mid - 1
        }
    }
    
    return -1
};