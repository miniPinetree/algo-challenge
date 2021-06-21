/*
 *
 * Given two arrays,
 * Second array is missing one element from the first array.
 * Find the missing element.
 *
 * Elements are always non-negative numbers
 * Duplicate elements are allowed
 *
 * findMissingElement([4,1,0,2,9,6,8,7,5,3], [6,4,7,2,1,0,8,3,9]); // 5
 *
 * Try to achieve the BEST time complexity.
 *
 */

export default function findMissingElement(arr1, arr2) {
  const object = {};

  arr2.forEach(element => {
    if (object[element]) {
      object[element] = ++object[element];
    } else {
      object[element] = 1;
    }
  })

  for (let i = 0; i < arr1.length; i++) {
    const numberOfElement = object[arr1[i]];

    if (!numberOfElement) return arr1[i];

    if (numberOfElement) {
      object[arr1[i]] = --numberOfElement;
    }

    if (numberOfElement < 0) {
      return arr1[i];
    }
  }
}
