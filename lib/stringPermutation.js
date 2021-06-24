/*
 *
 * Generate all permutations of a given string.
 *
 * < Examples >
 *
 * getPermutations("abc")  // ["abc", "acb", "bac", "bca", "cab", "cba"]
 *
 */

export default function getPermutations(str) {
  const result = [];

  function fixChar(str, fixedStr = '') {
    const strArray = [...str];

    strArray.forEach((char, fixedIndex) => {
      const fixer = char;
      const restArray = strArray.filter((char, index) => index !== fixedIndex);

      if (restArray.length === 0) {
        result.push(fixedStr + str);
        return;
      } else {
        fixChar(restArray.join(''), fixedStr + fixer);
      }
    })
  }

  fixChar(str);

  result.sort();
  return result;
}
