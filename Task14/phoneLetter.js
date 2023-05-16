const letterCombinations = (digits) => {
    if(!digits) return [];
    const phoneKeyboard = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    };

    if(digits.length === 1) return phoneKeyboard[digits];

    const result = [];

    const helper = (combination, nextDigits) => {
        if (nextDigits.length === 0) {
            result.push(combination);
        } 
        else {
            for (let i = 0; i < phoneKeyboard[nextDigits[0]].length; i++) {
                helper(combination + phoneKeyboard[nextDigits[0]][i], nextDigits.substring(1));
            }
        }
    }

    helper("", digits);
    return result;
};


console.log(letterCombinations('2376'));

