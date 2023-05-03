const myAtoi = (s) => {
    const match = s.trim().match(/^[-+]?[0-9]+/);
    if (match) {
        const num = parseInt(match[0]);
        const intMax = 2 ** 31 - 1;
        const intMin = -(2 ** 31);

        if (num > intMax) {
            return intMax;
        } else if (num < intMin) {
            return intMin;
        } else {
            return num;
        }
    } else {
        return 0;
    }
};



console.log(myAtoi("4193 with words"))