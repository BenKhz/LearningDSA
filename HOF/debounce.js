const limit = (cb, n) => {
  let count = n;
  return () => {
    if(count < 1) {
      console.log("Max Calls for this function")
    } else {
      count--;
      return cb()
    }
  }
}
const debounce = (cb, ms) => {
  let called = false;
  return () => {
    if(!called) {
      called = true;
      cb();
      setTimeout(() => {called = false}, ms)
    }
  }
}
const sayHello = () => {
  console.log("Hello")
}
const limitedHello = limit(sayHello, 2)
limitedHello(); // should execute
limitedHello(); // should execute
limitedHello(); // should print max calls error
limitedHello(); // should print max calls error

const bouncedHello = debounce(sayHello, 1000);
bouncedHello() // should execute
bouncedHello() // should not execute
setTimeout(bouncedHello, 2000) // should execute after 2 seconds