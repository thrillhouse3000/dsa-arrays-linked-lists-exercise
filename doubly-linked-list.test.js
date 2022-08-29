const DoublyLinkedList = require("./doubly-linked-list");

describe("push", function() {
  it("appends node, adds prevs, and increments length", function() {
    let lst = new DoublyLinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.head.next).toBe(null);
    expect(lst.tail.prev).toBe(null);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.prev).toBe(null);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);
    expect(lst.tail.prev.val).toBe(5);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.tail.val).toBe(15);
    expect(lst.tail.prev.val).toBe(10);
    expect(lst.tail.prev.prev.val).toBe(5);
  });
});

describe("unshift", function() {
    it("adds node at start and increments length", function() {
      let lst = new DoublyLinkedList();
  
      lst.unshift(5);
      expect(lst.length).toBe(1);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.head.next).toBe(null);
      expect(lst.tail.prev).toBe(null);

  
      lst.unshift(10);
      expect(lst.length).toBe(2);
      expect(lst.head.val).toBe(10);
      expect(lst.head.prev).toBe(null);
      expect(lst.head.next.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.tail.prev.val).toBe(10);
  
      lst.unshift(15);
      expect(lst.length).toBe(3);
      expect(lst.head.val).toBe(15);
      expect(lst.head.next.next.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.tail.prev.val).toBe(10);
      expect(lst.tail.prev.prev.val).toBe(15);
    });
  });

  describe("pop", function() {
    it("removes node at end and decrements length", function() {
      let lst = new DoublyLinkedList([5, 10]);
  
      expect(lst.pop()).toBe(10);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.length).toBe(1);
  
      expect(lst.pop()).toBe(5);
      expect(lst.tail).toBe(null);
      expect(lst.head).toBe(null);
      expect(lst.length).toBe(0);
    });
  });

  describe("shift", function() {
    it("removes node at start and decrements length", function() {
      let lst = new DoublyLinkedList([5, 10]);
  
      expect(lst.shift()).toBe(5);
      expect(lst.tail.val).toBe(10);
      expect(lst.length).toBe(1);
  
      expect(lst.shift()).toBe(10);
      expect(lst.tail).toBe(null);
      expect(lst.head).toBe(null);
      expect(lst.length).toBe(0);
    });
  });

  describe("getAt", function() {
    it("gets val at index", function() {
      let lst = new DoublyLinkedList([5, 10, 15, 20]);
  
      expect(lst.getAt(0)).toBe(5);
      expect(lst.getAt(1)).toBe(10);
      expect(lst.getAt(2)).toBe(15);
      expect(lst.getAt(3)).toBe(20);
    });
  });

  describe("setAt", function() {
    it("sets val at index", function() {
      let lst = new DoublyLinkedList([5, 10]);
  
      expect(lst.setAt(0, 1));
      expect(lst.setAt(1, 2));
      expect(lst.head.val).toBe(1);
      expect(lst.head.next.val).toBe(2);
    });
  });

  describe("insertAt", function() {
    // it("inserts node and adjusts nearby nodes", function() {
    //   let lst = new DoublyLinkedList([5, 10, 15, 20]);
  
    //   lst.insertAt(2, 12);
    //   expect(lst.length).toBe(5);
    //   expect(lst.head.val).toBe(5);
    //   expect(lst.head.next.val).toBe(10);
    //   expect(lst.head.next.next.val).toBe(12);
    //   expect(lst.head.next.next.next.val).toBe(15);
    //   expect(lst.head.next.next.next.next.val).toBe(20);
    //   expect(lst.tail.val).toBe(20);
    //   expect(lst.tail.prev.val).toBe(15);
    //   expect(lst.tail.prev.prev.val).toBe(12);
    //   expect(lst.tail.prev.prev.prev.val).toBe(10);
    //   expect(lst.tail.prev.prev.prev.prev.val).toBe(5);
  
    //   lst.insertAt(5, 25);
    //   expect(lst.head.next.next.next.next.next.val).toBe(25);
    //   expect(lst.tail.val).toBe(25);
    //   expect(lst.tail.prev.val).toBe(20);
    // });
  
    it("inserts into empty list", function() {
      let lst = new DoublyLinkedList();
  
      lst.insertAt(0, 5);
      expect(lst.length).toBe(1);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);
    });
  });