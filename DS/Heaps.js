class Heap {
  constructor(value, comparator) {
    this.storage = value ? [null, value]:[null];
    this.comparator = comparator || this.minCompare
  }
  peek() {
    return this.storage[1]
  }
  insert(value) {
    let idx = this.storage.length
    this.storage.push(value)
    while (idx > 1) {
      let parentIdx = Math.floor(idx / 2)
      // this.storage[parentIdx] > value
      if (!this.comparator(this.storage[parentIdx], value)) {
        this.swap(parentIdx, idx)
      } else {
        break;
      }
      idx = parentIdx;
    }
  }
  remove() {
    // get last item
    let result;
    [result, this.storage[1]] = [this.storage[1], this.storage.pop()];
    let idx = 1;
    while (idx < this.storage.length - 1) {
      let leftIdx = idx * 2;
      let rightIdx = idx * 2 + 1;
      // if no children to compare.
      if (!this.storage[leftIdx] && !this.storage[rightIdx]) {
        break
      }
      else {
        // if either child is less than parent...
        if (this.comparator(this.storage[leftIdx], this.storage[idx]) || this.comparator(this.storage[rightIdx], this.storage[idx])) {
          // determine which child is less.
          if(this.comparator(this.storage[leftIdx], this.storage[rightIdx])) {
            // swap left child
            this.swap(leftIdx, idx);
            idx = leftIdx;
          } else {
            // swap right child
            this.swap(rightIdx, idx);
            idx = rightIdx;
          }
        }
        else { break; }
      }
    }
    return result;
  }
  swap(idx1, idx2) {
    [this.storage[idx1], this.storage[idx2]] = [this.storage[idx2], this.storage[idx1]]
  }
  minCompare(val1, val2) { return val1 < val2; }
  maxCompare(val1, val2) { return  val1 > val2 };
}

const testValues = new Array(10).fill(1).map((e,i) => i+1)

const maxHeap = new Heap(null, Heap.maxCompare);
const minHeap = new Heap(null);
const custHeap = new Heap(null, (a,b) => a.weight < b.weight)

testValues.forEach(e => { maxHeap.insert(11 - e)})
testValues.forEach(e => { minHeap.insert(e)})
testValues.forEach(e => { custHeap.insert({value: String.fromCharCode(e + 96), weight:11-e})})

console.log(minHeap.storage)
console.log(maxHeap.storage)
console.log(custHeap.storage)