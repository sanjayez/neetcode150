// Binary search

var findMin = function(nums) {
    let res = nums[0]; // to keep track of minimum
    let l = 0, r = nums.length - 1;
    while(l <= r){
      // when encountered a sorted portion
        if(nums[l] < nums[r]){
            res = Math.min(res, nums[l]) 
            break;
        }

      // modified version of Binary search
        let mid = Math.floor((l + r) / 2);
        res = Math.min(res, nums[mid]);

      // if not in order then rotated
        if(nums[mid] >= nums[r]){
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }

    return res
};
