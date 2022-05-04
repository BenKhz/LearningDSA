// Merge Sort!

// Time : O(nlog(n))

// Overview :
//  1. We recursively split our array into the smallest possible elements.
//  2. Then we merge the smallest parts back together in a sorted manner travelling back up the stack.

// Steps to implement a merge sort
// 1. Create a merge function that takes in 2 arrays and merges them in a sorted manner.
// 2. Create a mergeSort function that splits arrays into smallest parts recursively. This function should then return a call of merge with the end of your callstack as arguements.

const merge = (arr1, arr2) => {
  var result = [];
  var item1 = arr1.pop()
  var item2 = arr2.pop()
  while (item1 || item2) {
    if (item1 > item2 || item2 === undefined) {
      result.unshift(item1)
      item1 = arr1.pop()
    } else if (item2 > item1 || item1 === undefined) {
      result.unshift(item2)
      item2 = arr2.pop()
    }
  }
  return result
}

const mergeSort = (arr) => {
  if (arr.length === 0) { return [] }
  if (arr.length === 1) { return arr }
  var mid = Math.floor(arr.length / 2)
  var arr1 = mergeSort(arr.slice(0, mid))
  var arr2 = mergeSort(arr.slice(mid))
  return merge(arr1, arr2)
}

// ------- Tests ----

const unSorted = [6, 3, 8, 4, 18, 45, 52, 99, 666, 22, 10, 5]
const sorted   = [3, 4, 5, 6, 8, 10, 18, 22, 45, 52, 99, 666]

const expectEqual = (test, expected, description) => {
  recieved = JSON.stringify(test);
  expected = JSON.stringify(expected)
  result = recieved === expected;
  console.log(description, '\n ------> ', result, recieved, expected)
}

expectEqual(mergeSort(unSorted), sorted, "My Implementation array should be the same after Stringify")

