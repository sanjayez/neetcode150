function powerset(array) {
    // Write your code here.
    let stack = [], result = []
  
    let power = (idx) => {
      if(idx === array.length) {
        result.push(stack.slice())
        return
      }
  
      stack.push(array[idx])
      power(idx + 1)
      stack.pop()
  
      power(idx + 1)
    }
  
    power(0)
    return result
  }