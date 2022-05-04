// Bubble Sort with Psuedo
// Time = O(n^2)
// Space = O(1) ---> All sorting happens in place.
// Bubble sort is a comparison algo often impelemented with iteration.
// Bubble and some other comparison algos such as Selection and Insertion run at O(n^2), but are easy to implement

// Simple Steps to implement for array the size of N
// 1. Create a swap helper function to switch 2 entries.
// 2. Iterate through array, comparing adjacent pairs, and swap if needed.
// 3. 1 iteration will place the max element on the right (end) of the list
// 4. Since largest is sorted at end... reduce length of iteration by 1 and repeat step 2.
// 5. Continue until an iteration completes with NO SWAPS or iteration length is < 2.

const sort = (arr) => {
  count = arr.length - 1;
  var swapped;
  const swap = (idx1, idx2) => {
    var [temp1, temp2] = [arr[idx1], arr[idx2]];
    [arr[idx1], arr[idx2]] = [temp2, temp1]
  }
  while (count) {
    console.log("Bubble Sort iterating")
    swapped = false;
    for (var i = 0; i < count; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true
        swap(i, i + 1)
      }
    }
    if (!swapped) { break }
    count--
  }
  return arr
}




// TDD is life! ------- Tests

const unSorted = [6, 3, 8, 4, 22, 10, 5];
const sorted = [3, 4, 5, 6, 8, 10, 22];

const expectEqual = (test, expected, description) => {
  recieved = JSON.stringify(test);
  expected = JSON.stringify(expected)
  result = recieved === expected;
  console.log(description, '\n ------> ', result, recieved, expected)
}

expectEqual(sort(unSorted), sorted, "Each array should be the same after Stringify")