var Tree = function (val) {
  this.val = val;
  this.children = []
}

Tree.prototype.addChild = function (val) {
  var childNode = new Tree(val)
  this.children.push(childNode)
  return childNode
}

Tree.prototype.bfs = function (val) {
  // this logs bfs traversal only
    var path = [];
    var queue = [this];
    var curr;
    while(queue.length){
        curr = queue.pop()
        path.push(curr.val)
        if(curr.val === val) { break }
        for(child of curr.children){
            queue.unshift(child)
        }
    }
    return path
}

Tree.prototype.dfs = function (val) {
  // this is incomplete. Will traverse dfs preorder, but won't find correctly
    var visited = new Set();
    var final = [];
    var found = false;
    const traversal = (node, path = []) => {
        console.log(node, path, visited)
        var path = path;
        if (found) { return ;}
        if(!visited.has(node)) {
            path.push(node)
            visited.add(node);
        }
        if(node.val === val){
            final = path;
            found = true;
            return; }
        else {
            for (child of node.children) {
            traversal(child, path)
        }
      }
    }
    traversal(this)
    return final;
}

Tree.prototype.map = function (cb) {
  if (!cb) { cb = (val) => val; }
  var newNode = new Tree(cb(this.val))
  for (child of this.children) {
    newNode.children.push(child.map(cb))
  }
  return newNode;
}

Tree.prototype.contains = function (val) {
    if (this.val === val) { return true; }
    for(child of this.children) {
        if(child.contains(val)) {
            return true
        }
    } return false;
}

const myTree = new Tree(1);
myTree.addChild(2)
myTree.addChild(3)
myTree.children[0].addChild(4)
myTree.children[0].addChild(10)
myTree.children[1].addChild(5)
myTree.children[1].addChild(6)

module.exports = myTree;
//           1
//       2      3
//     4  10   5  6


