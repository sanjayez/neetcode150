// maxL < maxR signifies that lower bound/bottleneck is satisfied
// updating max before adding makes sure that negative values are not considered
// watch neetcode trapping rain water for reference

const trap = function(height) {
    if(!height) return 0;
    let l = 0, r = height.length - 1;
    let maxL = height[l], maxR = height[r], res = 0;

    while(l < r){
        if(maxL < maxR){
            l += 1;
            maxL = Math.max(height[l], maxL);
            res += maxL - height[l]
        }
        else{
            r -= 1
            maxR = Math.max(height[r], maxR);
            res += maxR - height[r]
        }
    }

    return res;
};
