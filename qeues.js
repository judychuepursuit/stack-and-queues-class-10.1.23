class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];


  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  // enqueue = push
    enqueue(data) {
      let newItem = new Node(data);
      if (!this.first) {
        this.first = newItem;
        this.last = newItem;
      } else {
        this.last.next = newItem;
        this.last = newItem;
      }
      return ++this.size;
    }
    isEmpty() {
      return this.first === null;
    }
    // FIFO
    // POP (remove)
    dequeue() {
      if (this.first == null) {
        throw new Error("The queue is empty");
      }
      const item = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      // if only one in qeue this does not apply
      this.first = this.first.next;
      this.size--;
      return item.data;
    }
    peek() {
      if (this.first == null) {
        throw new Error("The queue is empty");
      }
      return this.first;
    }
}

  let queue = new Queue();
// console.log(queue.isEmpty());
for (let i = 0; i < months.length; i++) {
  queue.enqueue(months[i]);
}

const { inspect } = require("util");
console.log(queue.dequeue())
// console.log(queue.peek);
// console.log(queue.first);
// console.log(queue.last);
// console.log(queue.isEmpty());
console.log(inspect(queue, { colors: true, depth: 12 }))