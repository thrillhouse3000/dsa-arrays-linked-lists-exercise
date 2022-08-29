/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    const currHead = this.head
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head = newNode;
    this.head.next = currHead;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) throw new Error;
    let currNode = this.head;
    let currTail = this.tail;
    this.length -= 1
    if(currNode === currTail) {
        this.head = null
        this.tail = null
        return currNode.val
    }
    while(currNode.next) {
        if (currNode.next.val === currTail.val) {
          currNode.next = null;
          this.tail = currNode;
          return currTail.val;
        }
        currNode = currNode.next;
      }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) throw new Error;
    let currHead = this.head
    let nextNode = this.head.next;
    this.length -= 1
    if(currHead === this.tail) {
      this.head = null
      this.tail = null
      return currHead.val
    }
    this.head.next = nextNode;
    this.head = nextNode;
    return currHead.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    let currIdx = 0
      while(currNode) {
        if (currIdx === idx) {
          return currNode.val
        }
        currNode = currNode.next
        currIdx += 1
      }
      throw new Error
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;
    let currIdx = 0
      while(currNode) {
        if (currIdx === idx) {
          currNode.val = val
          return
        }
        currNode = currNode.next
        currIdx += 1
      }
      throw new Error
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let startingLength = this.length
    this.length += 1;

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return undefined;
    }
    if (idx === startingLength) {
        this.tail.next = newNode;
        this.tail = newNode;
        return undefined
    }
    if (idx === 0) {
        newNode.next = this.head
        this.head = newNode;
        return undefined
    }

    let currNode = this.head;
    let currIdx = 0
    while(currNode) {
        if (currIdx === idx - 1) {
            let nextNode = currNode.next;
            newNode.next = nextNode;
            currNode.next = newNode;
            return undefined
        }
        currNode = currNode.next
        currIdx += 1
    }
    throw new Error
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currNode = this.head;
    let currIdx = 0
    let prevNode
    let startingLength = this.length
    this.length -= 1
      while(currNode) {
        if(this.head === this.tail) {
          this.head = null
          this.tail = null
          return currNode.val
        }
        if (idx === 0) {
          let nextNode = currNode.next
          this.head.next = nextNode
          this.head = nextNode
          currNode.next = null
          return currNode.val
        }
        if (currIdx === idx - 1) {
          prevNode = currNode
        }
        if (currIdx === idx) {
          prevNode.next = currNode.next
          currNode.next = null
          return currNode.val
        }
        if (currIdx === idx && idx === startingLength) {
          prevNode.next = null
          this.tail = prevNode
          currNode.next = null
          return currNode.val
        }
        currNode = currNode.next
        currIdx += 1
      }
      throw new Error
      
  }

  /** average(): return an average of all values in the list */

  average() {
    let currNode = this.head;
    let sum = 0
    if (!this.head) {
      return 0
    }
    while(currNode) {
      sum += currNode.val
      currNode = currNode.next
    }
    return sum / this.length
  }
}

module.exports = LinkedList;
