const fizzBuzz = (n) => {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);

    return numbers.map(value => {
        if (value % 3 === 0 && value % 5 === 0) {
            return "FizzBuzz";
        } else if (value % 3 === 0) {
            return "Fizz";
        } else if (value % 5 === 0) {
            return "Buzz";
        } else {
            return value.toString();
        }
    });
};

console.log(fizzBuzz(60));
