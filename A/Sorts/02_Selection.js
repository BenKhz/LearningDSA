// Selection Sort with Psuedo
// Selection Sort is a comparison algo
// Time : O(n^2)
// Space: O(1)

// Steps to implement Selection Sort
// 1. Create a helper swap.
// 2. Create a pointer to our minimum value, and a pointer to our lower bound
// 3. Iterate through and swap lower bound with minimum found, lower (left) is considered sorted.
// 4. Repeat steps 2 and 3 after we increment lower bound by 1
// 5. Terminate when NO SWAPS or Lower bound > length of Array - 1 (no need to swap last if only 1 element remains)

const sort = (arr) => {
  var leftIdx = 0;
  var minVal;
  var minIdx;
  const swap = (idx1, idx2) => {
    var [temp1, temp2] = [arr[idx1], arr[idx2]];
    [arr[idx1], arr[idx2]] = [temp2, temp1]
  }
  while (leftIdx <= arr.length - 1) {
    console.log("Selection sort Iterating")
    minVal = Infinity;
    found = false;
    for (var i = leftIdx; i < arr.length; i++) {
      if (arr[i] < arr[leftIdx] && arr[i] < minVal) {
        minVal = arr[i];
        minIdx = i;
        found = true;
      }
    }
    if (found) { swap(leftIdx, minIdx) }
    leftIdx++;
  }
  return arr
}

// TDD is life! ------- Tests

const unSorted = [6, 3, 8, 4, 22, 10, 5]
const sorted = [3, 4, 5, 6, 8, 10, 22]

const expectEqual = (test, expected, description) => {
  recieved = JSON.stringify(test);
  expected = JSON.stringify(expected)
  result = recieved === expected;
  console.log(description, '\n ------> ', result, recieved, expected)
}


expectEqual(sort(unSorted), sorted, "Each array should be the same after Stringify")