class LLNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(rootNode) {
    this.head = rootNode || null;
    this.tail = null
  }
  peek() {
    return this.head ? this.head.val : null;
  }
  append(node) {
    if(!this.head) {
      this.head = node
      this.head.next = null}
    else if (!this.tail) {
      this.head.next = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
  }
  popHead() {
    if(!this.head) { return null;}
    let newHead = this.head.next;
    this.head.next = null;
    let popped = this.head
    this.head = newHead
    return popped;
  }
  findMiddle() {
    debugger;
    let roundDown = null;
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next) {
      roundDown = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  splitMiddle() {
    debugger;
    let roundDown = null;
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next) {
      roundDown = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    roundDown.next = null;
    return [this.head, slow]
  }
  zipWith(otherList) {
    let thisList = this;
    otherList = otherList || new LinkedList();
    let newList = new LinkedList()
    while(thisList.head && otherList.head){
      if(thisList.peek() <= otherList.peek() || !otherList.head) {
        newList.append(thisList.popHead())
      } else if((thisList.peek() > otherList.peek() || !thisList.head)) {
        newList.append(otherList.popHead())
      }
    }
    if(!thisList.head && otherList.head) { newList.tail.next = otherList.popHead() }
    if(!otherList.head && thisList.head) { newList.tail.next = thisList.popHead() }
    return newList;
  }
  traverse(node) {
    let curr = node || this.head;
    while(curr) {
      curr = curr.next
    }
  }
  search(target) {
    let curr = this.head;
    while(curr) {
      if(curr.val === target) { return true }
      curr = curr.next
    }
    return false
  }
  toString() {
    let str = ''
    let curr = this.head;
    while(curr) {
      if(str.length) { str += " -> "}
      str += curr.val
      curr = curr.next
    }
    console.log("Nodes:",str);
  }
}


let myLL = new LinkedList(new LLNode(2))
myLL.append(new LLNode(4))
myLL.append(new LLNode(6))
myLL.append(new LLNode(8))
myLL.append(new LLNode(10))
let otherLL = new LinkedList(new LLNode(1))
otherLL.append(new LLNode(7))
otherLL.append(new LLNode(9))
// otherLL.append(new LLNode(13))
const newList = myLL.zipWith(otherLL)
otherLL.append(new LLNode(666))
newList.toString();
newList.findMiddle();
console.log(newList.splitMiddle())
myLL.toString();
// myLL.popHead();
// myLL.toString();
// myLL.reverse();
// myLL.toString();
