/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time?
 * There is an algorithm that uses O(n) time.
 *
 */

String.prototype.isAnagram = function (string) {
  const reg =  /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
  let [str1, str2] = [this.replace(reg, ""), string.replace(reg, "")];

  if (str1.length !== str2.length) {
    return false;
  }else {
    str1 = Array.from(str1.toUpperCase()).sort();
    str2 = Array.from(str2.toUpperCase()).sort();
    
    return str1.toString() === str2.toString();
  };
}
