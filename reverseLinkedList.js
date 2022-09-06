// Iterative
var reverseList = function(head) {
    let curr = head, prev = null
    
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    return prev
};

// Recursive

let reverseList = (head) => {
    let curr = head, prev = null
    return reverse(curr, prev)
}

let reverse = (head, prev) => {
    if(!head) return prev
    
    let next = head.next
    head.next = prev
    
    return reverse(next, head)
}
