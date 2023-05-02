var romanToInt = function(s) {
    let sum = 0;
    s.split('').forEach((value, index, array) => {
        const current = roman[[value]];
        const next = roman[array[index + 1]];
        if(next && current < next) {
            sum -= current;
        }
        else {
            sum += current;
        }
    });
    return sum;
};

var romanToInt = function(s) {
    return s.split('').reduce((sum, value, index, array) => {
        const current = roman[[value]];
        const next = roman[array[index + 1]];

        if(next && current < next) {
            return sum - current;
        }
        else {
            return sum + current;
        }
    }, 0);
};

const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

console.log(romanToInt("LVIII"));