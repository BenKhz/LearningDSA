// Rabin-Karp is a rolling hash algo that checks chunks for a hash code, if those codes match, then compare the contents of your chunk.

// m:STRING
// n:TARGET STRING
//returns: BOOLEAN
const RK = (m, n) => {
  debugger;

  // Main logic to use rolling hashCode checks to find possible hit, then verify on hit.
  const rolling = (string, chunkLength) => {
    for (var i = 0; i < string.length; i += chunkLength) {
      var currChunk = string.slice(i, i + chunkLength);
      if (hash(currChunk) === targHashCode) {
        console.log("Hit")
        if (verify(currChunk, n)) {
          console.log("U sunk my battleship!")
          return true;
        }
      }
    }
    return false;
  }
  // Helper to verify compare parity of strings
  const verify = (str1, str2) => {
    for (var letterIdx = 0; letterIdx < str1.length; letterIdx++) {
      if (str2[letterIdx] === str1[letterIdx]) {
        return true;
      }
    }
  }
  // helper to create hashCodes from string chunks and target
  const hash = (chunk) => {
    let idx = 0;
    let hashCode = 0;
    while (idx < chunk.length) {
      hashCode += chunk.charCodeAt(chunk.length - idx - 1)
      idx++;
    }
    return hashCode;
  }
  // Create target hashCode
  var targHashCode = hash(n);
  // Run Rolling hash algo here.
  console.log(rolling(m, n.length))
}






// TDD is love
var testStr = 'This is a long string';
var targStr = "isgg";

// Expect to be 408.
// hash("This")

// Expect this to return a hashCode
// rolling(testStr, 4);

RK(testStr, targStr);


// const expectEqual = (test, expected, description) => {
//   result = recieved === expected;
//   console.log(description, '\n ------> ', result, recieved, expected)
// }

// expectEqual(testStr, targStr)