/**
 * Given an arbitrary input string, return the first non-repeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AABCABD'); // => 'C'
 */

export default function firstNonRepeatedCharacter(str) {
  let char = new Set(str);
  char = [...char];
  let result;

  const checkRepeat = (elem) => {
    const firstIdx = str.indexOf(elem);
    if(str.indexOf(elem, firstIdx+1)===-1){
      result = elem;
    };
    return str.indexOf(elem, firstIdx+1)===-1;
  };

  char.some(checkRepeat);
  return result;
}
