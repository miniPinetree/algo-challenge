/*
 *
 * Find out if a string is a rotation of another string.
 *
 * < Examples >
 *
 * isRotation("ABCD", "BCDA"); // true
 * isRotation("ABCD", "ACBD"); // false
 *
 */

export default function isRotation(a, b) {
  const circularChar = `${a[a.length -1]}${a[0]}`;
  const continuousStringCount = b.slice([...b].indexOf(a[0]), - 1).length;
  const linkedChar = a.slice(0, continuousStringCount);

  if (!a && !b) return true;

  if (b.includes(linkedChar) && b.includes(circularChar)) return true;

  return false;
}
