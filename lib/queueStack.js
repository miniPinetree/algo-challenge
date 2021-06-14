/**
 * Implement a queue using two stacks.
 */

/**
 * Stack Class (You can use array in your logic)
 */
export const Stack = function () {
  this.stack = [];
  // add an item to the top of the stack
  this.push = function (value) {
    this.stack.push(value);
  };

  // remove an item from the top of the stack
  this.pop = function () {
    return this.stack.pop();
  };

  // return the number of items in the stack
  this.size = function () {
    return this.stack.length;
  };
};

/**
 * Queue Class
 */
export const Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (value) {
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    if (outbox.size() !== 0) {
      return outbox.pop();
    } 
    else {
      while (inbox.size() > 1) {
        let value = inbox.pop();
        outbox.push(value);
      };
      
      return inbox.pop();
    };
  };

  // return the number of items in the queue
  this.size = function () {
    return inbox.size() + outbox.size();
  };
};
