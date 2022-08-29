class DoubleNode {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
class DoublyLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
  
        for (let val of vals) this.push(val);
    }

    push(val) {
        const newNode = new DoubleNode(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1
    }

    unshift(val) {
        const newNode = new DoubleNode(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode;
        }
        this.length += 1;
    }

    pop() {
        if(!this.head) throw new Error;
        let popped = this.tail.val
        this.length -= 1
        if(this.head === this.tail) {           
            this.head = null
            this.tail = null
            return popped
        }
        this.tail = this.tail.prev
        this.tail.next = null
        return popped
    }

    shift() {
        if(!this.head) throw new Error;
        let shifted = this.head.val
        this.length -= 1
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
            return shifted
        }
        this.head = this.head.next
        this.head.prev = null
        return shifted
    }

    getAt(idx) {
        let currNode
        let currIdx
        if (idx < (this.length / 2)) {
            currNode = this.head;
            currIdx = 0;
                while(currNode) {
                    if (currIdx === idx) {
                        return currNode.val
                    }
                currNode = currNode.next
                currIdx += 1
                }
                throw new Error
        } else {
            currNode = this.tail;
            currIdx = this.length - 1;
                while(currNode) {
                    if (currIdx === idx) {
                        return currNode.val
                    }
                currNode = currNode.prev
                currIdx -= 1
                }
                throw new Error
        }
    }

    setAt(idx, val) {
        let currNode
        let currIdx
        if (idx < (this.length / 2)) {
            currNode = this.head;
            currIdx = 0;
                while(currNode) {
                    if (currIdx === idx) {
                        currNode.val = val
                        return 
                    }
                currNode = currNode.next
                currIdx += 1
                }
                throw new Error
        } else {
            currNode = this.tail;
            currIdx = this.length - 1;
                while(currNode) {
                    if (currIdx === idx) {
                        currNode.val = val
                        return
                    }
                currNode = currNode.prev
                currIdx -= 1
                }
                throw new Error
        }
    }

    insertAt(idx, val) {
        let newNode = new DoubleNode(val);
        let currNode = this.head;
        let currIdx = 0
        this.length += 1;

        if(!this.head) {
          this.head = newNode;
          this.tail = newNode;
          return undefined;
        }
        while(currNode) {
            if (idx === 0) {
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
                return undefined
            }
            if (idx === this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode;
                this.tail = newNode;
                return undefined
            }
            if (currIdx === idx - 1) {
                newNode.next = currNode.next;
                newNode.prev = currNode;
                currNode.next = newNode;
                let nextNode = newNode.next
                nextNode.prev = newNode;
                return undefined
            }
            currNode = currNode.next
            currIdx += 1
        }
        throw new Error
    }
}

module.exports = DoublyLinkedList;