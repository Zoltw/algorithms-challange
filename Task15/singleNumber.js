const singleNumber = (nums) => {
    const obj = {};

    nums.forEach(digit => {
      if(digit in obj) { 
        obj[digit]++;
      } else {
        obj[digit] = 1;
      }
    });
    
    for(key in obj) {
      if(obj[key] === 1) {
        return key;
      }
    }
};

// more efficient solution

const singleNumber1 = (nums) => {
    return nums.reduce((res, num) => res ^ num)
};

console.log(singleNumber1([3,2,1,2,1]))
// if not seen digit +
// else digit -