/**
 * Implement a `countLeaves` in this basic Tree class.
 *
 * A leaf node is any node in the tree that has no children. `countLeaves` should
 * traverse the tree, and return the number of leaf nodes the tree contains.
 *
 * Illustration of a tree with three leaves:
 *
 *       * <- root
 *      / \
 *     *    * <- leaf
 *    / \
 *   *   * <- leaf
 *  /
 * * <- leaf
 *
 * Example usage:
 *   var root = new Tree();
 *   root.countLeaves();             // 1
 *   root.addChild(new Tree());
 *   root.countLeaves();             // still 1
 *   root.addChild(new Tree());
 *   root.children[0].addChild(new Tree());
 *   root.children[0].children[0].addChild(new Tree());
 *   root.countLeaves();             // 2
 *
 */

export var Tree = function () {
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  let count = 0;

  function traverseNode (node) {
    if (!node.children.length) {
      count++;
    } else {
      node.children.forEach(child => {
        return traverseNode(child);
      });
    }
  }

  traverseNode(this);
  return count;
};

/**
 *
 * add an immediate child
 * DO NOT MODIFY
 *
 */
Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }

  return this;
};

/**
 *
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 * DO NOT MODIFY
 *
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].isDescendant(child)) {
      // `child` is descendant of this tree
      return true;
    }
  }

  return false;
};

/**
 *
 * remove an immediate child
 * DO NOT MODIFY
 *
 */
Tree.prototype.removeChild = function (child) {
  const index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
