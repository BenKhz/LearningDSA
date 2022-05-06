class BST {
  constructor(val, left, right) {
    this.val=val;
    this.left=left || null;
    this.right=right || null;
  }
  addValue(value) {
    let node = new BST(value)
    if(node.val < this.val){
      if(!this.left) { this.left = node;}
      else { this.left.addValue(value) }
    }
    if(node.val > this.val){
      if(!this.right) { this.right = node;}
      else { this.right.addValue(value) }
    }
  }
  bfs(value) {
    let queue = [this];
    let curr;
    while(queue.length) {
      curr = queue.pop();
      if(curr.val === value) { return true }
      if(curr.left) { queue.unshift(curr.left) }
      if(curr.right) { queue.unshift(curr.right) }
    }
    return false;
  }
  bSearch(value) {
    let curr = this;
    while(curr) {
      if(curr.val === value) { return true }
      if(curr.val > value) { curr = curr.left }
      if(curr.val < value) { curr = curr.right }
    }
    return false
  }
  bSearch2(value, node) {
    let curr = node || this;
    if(!curr) { return false }
    if(curr.val === value) { return true };
    if(curr.val > value) { return this.bSearch2(value, curr.left) };
    if(curr.val < value) { return this.bSearch2(value, curr.right) };
  }
  balanceTree() {
    let nodes = [];
    const traverse = (node) => {
      if (node === null) { return }
      nodes.push(node);
      traverse(node.left)
      traverse(node.right)
    }
    traverse(this);
    nodes.sort((a,b) => a.val - b.val)
    const makeBalancedTree = (nodes) => {
      if(nodes.length === 1) { return nodes[0] }
      let mid = Math.floor(nodes.length / 2);
      let upper = mid+1;
      let root = nodes[mid];
      root.left = makeBalancedTree(nodes.slice(0,mid))
      root.right = makeBalancedTree(nodes.slice(upper))
    }
    makeBalancedTree(nodes)
    return nodes(Math.floor(nodes.length / 2));
  }
}

const myBST = new BST(5);

myBST.addValue(2)
myBST.addValue(6)
myBST.addValue(7)
myBST.addValue(9)
console.log(myBST.balanceTree())
console.log(myBST.bSearch(9))
console.log(myBST.bSearch2(6))

// console.log(myBST)