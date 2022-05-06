// @param arr: Array<int>
// @param n  : int -- defaults to 1
// @return : nthLargest unique value of arr

const nthLargest = (arr, n = 1) => {
  // naive apporach to finding nth largest:
  // add all values to a unique set, then sort that set and access the correct index
  // then use reduce to add all items to a unique set
  // create array from the resulting set and access the nth index

  try{
    if(n < 1) { throw new Error("n must be a positive integer value")}
    let uniq = new Set();
    arr.forEach(e => uniq.add(e))
    let results = Array.from(uniq).sort((a,b) => b-a)
    let result = results[n-1]
    if(!result) { throw new Error(`${n} largest not found! Does your input array have more than ${n} unique values?`); }
    return result;
  } catch (e) {
    console.error("An Error was encountered!")
    return e
   }
}

console.log(nthLargest([5,5,5,5,5], 1)) // should be 5
console.log(nthLargest([5,5,5,5,5], 2)) // should Error
console.log(nthLargest([5,4,3,2,1], 2)) // should be 4
console.log(nthLargest([5,3,2,6,7,2], 7)) // should Error
console.log(nthLargest([-10,-3,4,2,-12], 4)) // should be -10
console.log(nthLargest([5,3,2,6,7,2], 7)) // should Error
console.log(nthLargest([5,5,5,5,5], -1)) // should Error
console.log(nthLargest([5,5,5,10,5])) // should be 10
console.log(nthLargest([])) // should Error
