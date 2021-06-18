/**
 * Write a function that reverses the order of a singly-linked list in place.
 *
 * So a list like this:
 *   A -> B -> C -> null
 * Should be transformed into a list like this:
 *   C -> B -> A -> null
 *
 * Example:
 *
 * var root = Node('A');
 * var nodeB = root.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * // The list looks like this: A -> B -> C -> null
 *
 * var newRoot = reverseLinkedList(root);
 * // The list now looks like this: C -> B -> A -> null
 * newRoot.value // => 'C'
 * newRoot.next  // => nodeB
 * root.next     // => null (the old root is now the terminal node)
 *
 * (You can assume that the list ends without a cycle.)
 */

export const Node = function (value) {
  return { value: value, next: null };
};

export const reverseLinkedList = function (node) {
  const stack = [];
  let currentNode = node;
  let nextNode = currentNode.next;
  let reversedNode = null;

  if (node === null) {
    throw new Error("root node doesn't exist");
  }

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = reversedNode;
    reversedNode = currentNode;
    currentNode = nextNode;
  }

  return reversedNode;
};

