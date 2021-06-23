/*
 *
 * Write a function that accepts an array of random integers and an integer n.
 * Determine the number of times where two integers in the array have the difference of n.
 *
 * < Examples >
 *
 * f(4, [1, 5, 6, 9, 16, 27]) // 2   (Due to [1, 5], and [5, 9])
 * f(2, [1, 3, 5, 4])         // 2   (Due to [1, 3], [3, 5])
 *
 */

export default function integerDifference(n, array) {
  let result = [];
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i; j < sortedArray.length; j++) {
      const difference = sortedArray[i] - sortedArray[j];
      if (i === j) continue;

      if (Math.abs(difference) > n) {
        break;
      } else if (Math.abs(difference) === n) {
        result.push([sortedArray[i], sortedArray[j]]);
      }
    }
  }
  return result.length;
}
