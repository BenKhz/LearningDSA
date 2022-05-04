// This works by instead of comparing individual chars, it chunks the data and uses a hashing function to create hashCodes.

// If hashCodes match, then we will we will verify each char in the chunk to confirm a match. Using hashCodes lets us bypass unneeded iteration in chunks that don't have a matching hash code.

// Problem!! A bad hashing function can lead to many "spurious hits", which will degrade this algos performance.
// Below we implemented with a simple addition algo.
// Another Pitfall: Some hashCodes may cause integer overflow, so care must be taken.

const Rabin = (file1, file2) => {
  if(file1.length !== file2.length) { return false }
  const chunkSize = file2.length % 2**16;

  const rolling = (input1, input2, chunk) => {
    for(var i = 0; i<file1.length; i+=chunk) { // <---- change to i++ for more thourough iteration.
      // This is a dangerous iteration method because we skip possible internal combos between chunk boundaries.
      // [012], [345], [567]
      // Avoid this by only moving index by 1 in the loop, but still creating hashCodes from chunks as below.
      // [012], [123], [234], [345]
      if(hash(input1.slice(i,i+chunk)) !== hash(input2.slice(i,i+chunk))) {
        return false;
      }
    }
    return true;
  }
  return rolling(file1, file2, chunkSize);
}

const hash = (chunk) => {
  // This simple hash function works, but can result in too many spurious hits. Alternatives are custom hash / cryptographical hash. bcyrpt, sha, not md5 for some reason...
  let idx = 0;
  let hashCode = 0;
  while (idx < chunk.length) {
    hashCode += chunk.charCodeAt(chunk.length - idx - 1)
    idx++;
  }
  return hashCode;
}

var testFile1 = 'Hello I\'m a friggin testFile!';
var testFile2 = 'Hello I\'m a friggin testFile!';

console.log(Rabin(testFile1, testFile2))