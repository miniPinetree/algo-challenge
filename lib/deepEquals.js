/**
 *
 * Detect if the given two JSON-like objects are equal.
 *
 * [DO NOT USE] JSON.parse or JSON.stringify
 *
 * deepEquals({ name: 'ken', age: 33 }, { name: 'ken', age: 33 }); // true
 *
 * deepEquals({ name: 'ken', work: { company: 'vanilla coding', since: 2017 } }, { name: 'ken', work: { company: 'vanilla coding', since: 2017 } }); // true
 *
 */

export default function deepEquals(original, target) {
  if (typeof original !== 'object' || typeof target !== 'object') {
    throw new TypeError("This test only compares object types.");
  }

  for (let property in original) {
    if (!original.hasOwnProperty(property) || !target[property]) return false;

    const [value1, value2] = [original[property], target[property]];

    if (typeof value1 === "object" && typeof value2 === "object") {

      return deepEquals(value1, value2);
    }

    if (value1 !== value2) return false;
  }

  return true;
}
