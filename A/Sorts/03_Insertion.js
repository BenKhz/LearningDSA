// Insertion Sort with Psuedo

// Insertion Sort is a comparison algo similar to selection, but it orders its "sorted partition" as well.
// Time : O(n^2)
// Space: O(1)

// Steps to implement Insertion Sort
// 1. Create a swap helper (optional)
// 2. Start a for loop at 2nd element (1 element is sorted by nature)
// 3. Each iteration. Use the start to define our pivot and pivot-1 is the start of our decending partition sort.
// 4. Within a while loop that stops when our sorted partition is finished... check if the current sub partition (topSort) is > pivot. If greater, swap and decrease our pivot reference in order to continue compairing entries in sub partition.
// 5. Finally always decrease our current subPartition reference (topSort)
// 6. Step 2 repeats Steps 3-5 for us until our for loop has executed array.length times.
// 7. Revel in the glory of your sorted in place algo!

const sort = (array) => {
  const swap = (idx1, idx2) => {
    var [temp1, temp2] = [array[idx1], array[idx2]];
    [array[idx1], array[idx2]] = [temp2, temp1];
  }
  for(var i=1; i<array.length; i++) {
    var sortTop = i - 1;
    var pivot = i
    while(sortTop >= 0){
      if(array[sortTop] > array[pivot]) {
        swap(sortTop, pivot)
        pivot--;
      }
      sortTop--;
    }
  }
  return array;
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

expectEqual(sort(unSorted), sorted, "My Implementation array should be the same after Stringify")
