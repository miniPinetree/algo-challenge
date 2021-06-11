/**
 *
 * Detect if the given brackets are balanced
 *
 * balancedBrackets('({[]})({[]})');    // true
 *
 * balancedBrackets('{([)]}');          // false
 *
 *
 */

 export default function balancedBrackets(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const lastBracket = stack[stack.length - 1];
    
    if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i]);
    } else {
      if (stack.length === 0) return false;

      switch (input[i]) {
        case ")" :
          if (lastBracket === "(") {
            stack.pop();
            break;
          };
        case "}" :
          if (lastBracket === "{") {
            stack.pop();
            break;
          };
        default :
          if (lastBracket === "[") {
            stack.pop();
            break;
          };
      };
    }
  };
  
  if (stack.length === 0) {
    return true;
  };
  return false;
}
