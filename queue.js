/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newVal = new Node(val)

    if (this.first === null) {
      this.first = newVal;
      this.last = this.first;
    }
    
    else {
      this.last.next = newVal
      this.last = newVal
    }
    this.size += 1

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.first !== null){
      let tempFirst = this.first
      this.first = this.first.next
      this.size -= 1
      return tempFirst.val
    }

    else  {
      err('There are no items in the queue')
    }

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.first !== null){
      return this.first.val
    }

    else  {
      console.err('There are no items in the queue')
    }

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first ? false : true
  }
}

module.exports = Queue;
