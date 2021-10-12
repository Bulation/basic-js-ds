const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  queue = {};
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (Object.keys(this.queue).length == 0) this.queue = new ListNode(value);
    else {
      let cur = this.queue;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new ListNode(value);
    }
  }

  dequeue() {
    let tmp = this.queue.value;
    this.queue = this.queue.next;
    return tmp;
  }
};
