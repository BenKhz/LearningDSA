// Stack DS template for Testing.

var Stack = function () {
  this._storage = {}
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.length++;
  this._storage[this.length-1] = val
  return this.length;
};

Stack.prototype.pop = function () {
  var tail = this.storage[this.length]
  delete this.storage[this.length-1];
  this.length--;
  return tail;
}

Stack.prototype.size = function () {
  return this.length;
}

var test = new Stack();
test.push(45);
console.log(test)