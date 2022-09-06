var maxArea = function(height) {
    let i = 0, j = height.length - 1, area = 0
    while(i < j){
        let h = Math.min(height[i], height[j])
        let w = j - i
        
        area = area >= h * w ? area : h * w
        
        if(height[i] <= height[j]) i++
        else j--
    }
    
    return area
};