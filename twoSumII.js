var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1
    while(l !== r){
        if(numbers[l] + numbers[r] > target) r -= 1
        else if(numbers[l] + numbers[r] < target) l += 1
        else return [l + 1, r + 1]
    }
};