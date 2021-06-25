/*
 *
 * Given a number, find the next higher number using only the digits in the given number.
 *
 * < Examples >
 *
 * f(1234)  // 1243
 *
 */

export default function nextHighestNumber(number) {
  const array = [...number.toString()].map(x => +x);

  function findNextNumber (pivot, array) {
    const biggerThanPivot = array.filter((number) => number > pivot);

    if (biggerThanPivot.length) {
      const nextNumber = Math.min(...biggerThanPivot);

      array.splice(array.indexOf(nextNumber), 1);
      array.sort((a, b) => a - b);

      return [nextNumber, ...array];
    }

    return number;
  }

  function findNegativeNext (pivot, array) {
    const smallerThanPivot = array.filter((number) => number < pivot);

    if (smallerThanPivot.length) {
      const nextNumber = Math.max(...smallerThanPivot);

      array.splice(array.indexOf(nextNumber), 1);
      array.sort((a, b) => a - b);

      return [nextNumber, ...array];
    }

    return number;
  }

  if (number.toString().slice(0, 1) === "-") {
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i - 1] > array[i]) {
        const index = i - 1;
        const pivot = array[index];
        const left = array.slice(1, index);
        const right = array.slice(index);
        const rest = findNegativeNext(pivot, right);
        const result = left.concat(rest).join("");

        return -result;
      }
    }
  }

  for (let i = array.length - 1; i > 0; i--) {
    if (array[i - 1] < array[i]) {
      const index = i - 1;
      const pivot = array[index];
      const left = array.slice(0, index);
      const right = array.slice(index);
      const rest = findNextNumber(pivot, right);
      const result = left.concat(rest).join("");

      return Number(result);
    }
  }

  return findNextNumber(array[0], array.slice(1));
}
