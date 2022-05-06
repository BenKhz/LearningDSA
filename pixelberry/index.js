// @param arr: Array<int>
// @param n  : int -- defaults to 1
// @return : nthLargest unique value of arr

const nthLargest = (arr, n = 1) => {
  // naive apporach to finding nth largest:
  // sort the input array from largest to smallest
  // then use reduce to add all items to a unique set
  // create array from the resulting set and access the nth index
  try{
    if(n < 1) { throw new Error("n must be a positive integer value")}
    let uniq = arr.sort((a,b) => b-a).reduce((acc,item) => {
      acc.add(item)
      return acc;
    }, new Set())
    let result = Array.from(uniq)[n-1]
    if(!result) { throw new Error(`${n}th largest not found! Is your input array smaller than ${n}?`); }
    return result;
  } catch (e) {
    console.error("An Error was encountered!")
    return e
   }
}

console.log(nthLargest([5,5,5,5,5], 1)) // should be 5
console.log(nthLargest([5,4,3,2,1], 2)) // should be 4
console.log(nthLargest([5,3,2,6,7,2], 7)) // should Error
console.log(nthLargest([-10,-3,4,2,-12], 4)) // should be -10
console.log(nthLargest([5,3,2,6,7,2], 7)) // should Error
console.log(nthLargest([5,5,5,5,5], -1)) // should be Error
console.log(nthLargest([5,5,5,10,5])) // should be 10
