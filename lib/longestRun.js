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
  const answer = [];
  const length = [];
  let count = 0;

  if (set.length === string.length) {
    return [0,0];
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i+1]) {
      if (count) length.push([count, i]);
      count = 0;
    } else {
      count++;
    }
  }

length.sort((a,b) => b[0] - a[0]);

const mostRepeatedCount = length[0][0];
const lastIndex = length[0][1];

answer.push(lastIndex - mostRepeatedCount, lastIndex);

return answer;
}
