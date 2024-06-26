/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newVal = new Node(val)

    if(this.first === null)  {
      this.first = newVal;
      this.last = this.first;
    }
    
    else  {
      this.first.next = newVal;
      this.first = newVal;
    }
    this.size += 1
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      console.error("Can't pop from an empty stack.");
    }

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first;
    this.size--;
    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first ? false : true
  }
}

module.exports = Stack;
