const isPalindrome = (head) => {
    if(head.length % 2 === 0) {
       const first = head.slice(0, head.length/2);
       const second = head.slice(head.length/2);
       const rev = second.reverse();
       for(let i = 0; i < first.length; i++) {
            if(first[i] !== rev[i]) {
                return false;
            }
        }
        return true;
    }
};


console.log(isPalindrome([1,2,2,1]));