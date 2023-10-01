// STACKS: LIFO

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


  class Stack {
    constructor(top = null) {
      this.top = top;
    }
    isEmpty() {
      return this.top === null;
    }

    push(data) {
      const newItem = new Node(data);
      newItem.next = this.top;
      this.top = newItem;
    }
  // }
  //   class Stack {
  //     constructor(top = null) {
  //       this.top = top;
      // }
      peek() {
        if (this.top == null) {
          throw new Error("The stack is empty");
        }
        return this.top;
      }
      pop() {
        if (this.top == null) {
          throw new Error("The stack is empty");
        }
        let item = this.top;
        if (item) {
          let newItem = item.next;
          this.top = newItem;
          return item;
        }
      }
    }

  
  const stack = new Stack();
  console.log(stack.isEmpty());
  for (let i = 0; i < months.length; i++) {
    stack.push(months[i]);
  }
  
  const { inspect } = require("util");
  console.log(stack.peek());
  console.log(inspect(stack, { colors: true, depth: 12 }));
