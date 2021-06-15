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
  // TODO: your code here..
  for (let property in original) {
    const [value1, value2] = [original[property], target[property]];

    if (!value2) return false;

    if (typeof value1 === "object" && typeof value2 === "object") {

      return deepEquals(value1, value2);
    }

    if (value1 !== value2) return false;
  }

  return true;
}
