class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const zipperLists = (head1, head2) => {
    // todo
    let dummy = new Node()
    let tail = dummy
    
    while(head1 && head2){
      tail.next = head1
      head1 = head1.next
      tail = tail.next
      
      tail.next = head2
      head2 = head2.next
      tail = tail.next
    }
    
    if(head1) tail.next = head1
    if(head2) tail.next = head2
    
    return dummy.next
  };
  
  module.exports = {
    zipperLists,
  };
  