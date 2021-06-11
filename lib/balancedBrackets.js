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
    if (input[i]==="(" || input[i]==="{" || input[i]==="[") {
      stack.push(input[i]);
    } else {
      if (stack.length === 0) return false;

      switch (input[i]) {
        case ")" :
          if (stack[stack.length-1] === "(") {
            stack.pop();
            break;
          };
        case "}" :
          if (stack[stack.length-1] === "{") {
            stack.pop();
            break;
          };
        default :
          if (stack[stack.length-1] === "[") {
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
