const maximumWealth = (accounts) => {
    let max = 0;
    accounts.forEach(value => {
        let tmp = value.reduce((a,b) => a + b, 0);
        max = Math.max(max, tmp);
    });
    return max;
};

console.log(maximumWealth([[2,3,1], [1,2,2], [3,4,4]]));