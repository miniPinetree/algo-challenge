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
  const [longerArray, shorterArray] = (arr1.length > arr2.length)? [arr1, arr2] : [arr2, arr1];
  const object = {};

  shorterArray.forEach(element => {
    if (object[element]) {
      object[element] = ++object[element];
    } else {
      object[element] = 1;
    }
  })

  for (let i = 0; i < longerArray.length; i++) {
    if (!object[longerArray[i]]) return longerArray[i];

    if (object[longerArray[i]]) {
      object[longerArray[i]] = --object[longerArray[i]];
    }

    if (object[longerArray[i]] < 0) {
      return object[longerArray[i]];
    }
  }
}
