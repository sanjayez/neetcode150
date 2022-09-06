// ARRAY AND HASHING

// either use this "building seperate graphs for each word" method OR
// the one with group anagram method, building keys of length 26

var isAnagram = function(s, t) {
    let map = {}
    
    if(s.length !== t.length) return false
    
    for(let letter of s){
        if(letter in map) map[letter] += 1
        else map[letter] = 1 
    }
    
    for(let letter of t){
        if(letter in map) map[letter] -= 1
    }
    
    for(let k in map){
        if(map[k] !== 0) return false
    }
    
    return true
};