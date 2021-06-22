/**
 * Write a function that, given a string, finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 */

export default function longestRun(string) {
  const set = [...new Set(Array.from(string))];
  let [mostRepeatedCount, lastIndex] = [0, 0];
  let count = 0;

  if (set.length === string.length) {
    return [0, 0];
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      if (count > mostRepeatedCount) {
        mostRepeatedCount = count;
        lastIndex = i;
      }
      count = 0;
    } else {
      count++;
    }
  }

return [lastIndex - mostRepeatedCount, lastIndex];
}
