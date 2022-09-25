var reorderList = function(head) {

    // find the middle
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    // get the second list and terminate the first half
    let second = slow.next
    slow.next = null

    // get a pointer for first
    let first = head
    // pointer for reversed 2nd half
    let rev = null
    
    // reverse the list and the second last pointer will have the head 
    // of reversed list
    while(second){
        let temp = second.next
        second.next = rev
        rev = second
        second = temp
    }
    
    // merge the two
    while(rev && first){
        let temp1 = first.next
        first.next = rev
        first = temp1
        
        let temp2 = rev.next
        rev.next = first
        rev = temp2
    }

    // since the second half would be smaller than the first
    // second list exhausts before first and nothing is remaining to
    // to be appeded in the end
};