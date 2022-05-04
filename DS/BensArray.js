class BensArray {
  constructor() {
    this.length = -1,
    this.store = {};
    this.mapCache = new Map()
  }
  push(val) {
    this.length++;
    this.store[this.length] = val;
    this.mapCache = new Map()
  }
  pop() {
    let result = this.store[this.length];
    this.length--;
    this.mapCache = new Map()
    return result
  }
  get(idx) {
    return this.store[idx]
  }
  forEach(cb) {
    for(var i = 0; i<=this.length; i++) {
      cb(this.store[i], i)
    }
  }
  map(cb) {
    if(!cb) { cb = (x,y) => x; }
    let key = cb.toString()
    if(this.mapCache.has(key)) {
      console.log("returning cached result")
      return this.mapCache.get(key)}
    const result = [];
    for(var i = 0; i<=this.length; i++) {
      result.push(cb(this.store[i], i))
    }
    this.mapCache.set(key, result)
    return result
  }
  includes(value) {
    for(var i = 0; i<=this.length; i++) {
      if(this.store[i] === value) { return true }
    }
    return false
  }
}

const test = new BensArray();

console.log(test.length)
test.push(2)
test.push(5)
test.push("Ben")
console.log(test.get(1))
test.forEach((item, idx) => {console.log(idx, item)})
console.log(test.map((x) => typeof x === 'string' ? x: x*2))
console.log(test.map((x) => typeof x === 'string' ? x: x*2))
test.push(25)
console.log(test.map((x) => typeof x === 'string' ? x: x*2))
console.log(test.includes("Ben"))
console.log(test.mapCache)