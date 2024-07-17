class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push a new node (new tail) to end of linked list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Traverse through each node of the linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log("This is the current vertex:", current.val);
      current = current.next;
    }
  }

  // Remove last node (current tail) of linked list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while(current.next) {
      prev = current;
      current = current.next;
    }
    console.log("current.val: ", current.val);
    console.log("prev.val: ", prev.val);
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return deleted node
    return current;
  }

  // Remove first node (curent head) of linked list
  shift() {
    // If there are no nodes, return `undefined`
    if (!this.head) return undefined;
    // Store the current head property in a variable
    let currentHead = this.head;
    // Set the head property to be the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;
    // Set head to null and tail to null;
    if (this.length === 0) {
      this.tail = null;
    }
    // Return the value of the node removed
    return currentHead;
  }

  // Add new node to the beginning (new head) of the linked list
  unshift(val) {
    // Create a new node using the value passed to the function
    const newNode = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
    // Set the newly created node's next property to be the current head property on the list
    newNode.next = this.head;
    // Set the head property on the list to be the newly created node
    this.head = newNode;
    }
    // Increment the length of the list by 1
    this.length++;
    // Return the length of the list by 1
    return this;
  }

  // Get the node at the given index
  get(index) {
    // If the index is less than zero or greater than or equal to the length of list, return null
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    // Loop through the list until you reach the index and return the node at that index
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set node's value at given index
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert new node at given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // returns true
    if (index === 0) return !!this.unshift(val); // returns true
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Remove node at given index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removedNode;
  }
}

const list = new LinkedList();
list.push('Hello!');
list.push('BTY!');
list.push('SECOND');
list.push('BEST');
list.push('COHORT');
list.push('EVAR!');

// console.log(list);


// ---- Traverse List ----
// list.traverse();

// ---- Pop ----
// const popped = list.pop();
// console.log(popped);

// ---- Shift ----
// const shifted = list.shift();
// console.log(shifted, list);

// ---- Unshift ----
// list.unshift('Well then...');
// console.log(list);

// ---- Get Node at Index ----
// const idxThreeNode = list.get(3)
// console.log(idxThreeNode);

// ---- Set Found Node's Value ----
// const nodeWasFound = list.set(1, "Better Than Yesterday");
// console.log(nodeWasFound);
// console.log(list);

// ---- Insert Node ----
// list.insert(1, "Hi, I'm new here!");
// console.log(list.get(0), list.get(1), list.get(2));

// ---- Remove Node ----



// ---- Manually Creating Linked List (no good!) ----
// const first = new Node('Hello');
// first.next = new Node('Better Than Yesterday');
// first.next.next = new Node('What is');
// first.next.next.next = new Node('For');
// first.next.next.next.next = new Node('Lunch Today?');
// console.log(first);