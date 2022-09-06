var threeSum = function(nums) {
    let res = []
    
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){

        // Since the array is sorted, this line avoids duplicates 
        // and skips to next non-duplicate number
        if(i > 0 && (nums[i - 1] === nums[i])) continue
        
        // init pointers
        let j = i + 1, k = nums.length - 1

        // Search for 2nd and 3rd number from non-duplicate number range
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum < 0) j += 1
            else if(sum > 0) k -= 1
            else {
                res.push([nums[i], nums[j], nums[k]])
                j += 1

                // increase the 2nd left pointer if you find anu duplicates in the range
                while(nums[j - 1] === nums[j] && j < k){
                    j += 1
                }
            }
        }
    }
    
    return res
};