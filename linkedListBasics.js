// middle of linked List

const middle = (head) => {
    let slow = head
    let fast = slow
    
    // if even length, slow at beginning of 2nd half
    // if odd length, slow is the middle node
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    console.log(slow, fast, head)
}