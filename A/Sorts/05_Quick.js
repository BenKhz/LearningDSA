// QuickSort with Psuedo
// Simialr to Merge sort
// A Divide and conquer algo.

// The difference between this and mergeSort is that we save space.
// A reference to the original array is carried down with each call

// QuickSort is preferred for Arrays, while mergeSort is better for non continguious data like LL.


// Helper to accomdate swapping.
const swap = (arr, start, end) => {
  [ arr[start], arr[end] ] = [ arr[end], arr[start] ]
}

// partition, scan, swap, returns index of left pointer // start
// even though we compare to the VALUE of the pivot, it can still be swapped positionally.
// Each partition call should return either bound so we can use it to determine new partition calls
// in this case we use the lower bound.

const partition = (arr, start, end) => {
var end = (end === undefined) ? arr.length -1: end;
var start = start || 0;
var pivot = arr[Math.floor((end + start) / 2)];
if((end - start) <= 0) { return }
while(start < end) {
  while(arr[start] < pivot) { start ++ }
  while(arr[end] > pivot) {end--}
  if(start <= end) {
      swap(arr, start, end)
      start++
      end--
  }
}
return start;
}

// Actual QS logic.
const QuickSort = (arr, start, end) => {
if(arr.length > 1) {
  var idx = partition(arr, start, end)
}
// if the start of our arr is less than our index, then our partition has determined there are more balues left of pivot.
if(start < idx - 1) {
  QuickSort(arr, start, idx-1)
}
if(end > idx) {
  QuickSort(arr, idx, end)
}
return arr;
}

// TDD is life! ------- Tests

const unSorted = [6,3,8,5,22,10,4]
const sorted   = [3,4,5,6,8,10,22]

const expectEqual = (test, expected, description) => {
  console.log(test)
  recieved = JSON.stringify(test);
  result = JSON.stringify(test) === JSON.stringify(expected);
  console.log(description, '\n ------> ', result)
}

expectEqual(QuickSort(unSorted,0,unSorted.length-1), sorted, "Each array should be the same after Stringify")