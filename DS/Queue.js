// Queue template for testing

var Queue = function() {
  this._storage = {};
  this.front = 0;
  this.length = 0;
}

Queue.prototype.enqueue = function (val) {
  this.front++;
  this.length++;
  this._storage[this.front] = val;
}

Queue.prototype.dequeue = function () {
  if(!this.size()){
    return null
  } else {
    this.length--;
    var result = this._storage[this.front - this.length]
    delete this._storage[this.front - this.length]
    return result;
  }
}

Queue.prototype.size = function () {
  return this.length < 0 ? 0:this.length;
}

module.exports = Queue;