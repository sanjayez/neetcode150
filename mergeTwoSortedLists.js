// having a dummmy node to begin is a genral trick to avoid empty list edge cases
// dummy is the head of dummy node and holds reference to first element
// prev is the tail and builds the list 
// in the end dummy.next is returned

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let prev = dummy
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            prev.next = list1
            list1 = list1.next
        }
        
        else{
            prev.next = list2
            list2 = list2.next
        }
        
        prev = prev.next
    }
    
    prev.next = list1 || list2
    
    return dummy.next
    
};