const isValid = (s) => {
    const stack = [];
    const openBrackets = new Set(['(', '{', '[']);
    const closeBrackets = new Set([')', '}', ']']);
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (openBrackets.has(currentChar)) {
        stack.push(currentChar);
      } else if (closeBrackets.has(currentChar)) {
        const correspondingOpenBracket = stack.pop();
  
        if (bracketMap[currentChar] !== correspondingOpenBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };