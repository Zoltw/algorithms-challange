const isPalindrome = (head) => {
    let string1 = string2 = "";
    let node = head;
    
      while(node != null){
          string1 = `${string1}${node.val}`;
          string2 = `${node.val}${string2}`;
          node = node.next;
      }
      return string1 === string2;
  }

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}