var detectCycle = function(head) {

    if(head==null || head.next == null) return null

    let slow  = head
    let fast  = head
    let entry  = head
    

    while(fast.next!=null && fast.next.next!=null){
        slow = slow.next
        fast = fast.next.next

        if(slow ==fast){
            while(slow!=entry){
                slow = slow.next
                entry = entry.next
            }

            return entry
        }
    }
    return null
};