// ARRAY and HASHING

//remember the array syntax, let arr = new Array(len).fill(value)
// remember to subtract the offset of 'a'.charCodeAt(0) from each ASCII to not exceed the 26 alphabets

// trick for anagram problems -> create a key made of array of 26 chars with idx mapped to alphabets
// increment the corresponding positions in the key array and store in hashmap for easy lookup

var groupAnagrams = function(strs) {
    let res = {}
    for(let word of strs){
        let key = new Array(26).fill(0)
        for(let char of word){
            key[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        if(key in res) res[key].push(word)
        else res[key] = [word]
    }
    
    let result = []
    for(let i in res){
        result.push(res[i])
    }
    
    return result
};