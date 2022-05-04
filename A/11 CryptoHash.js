// Simple example of using cypto module to create a hash

const {createHash} = require('crypto');

const hasher = createHash('sha256');

hasher.update("my butt is being hashed");
const one = hasher.copy().digest('hex');
hasher.update("my butt is not hashed");
const two = hasher.copy().digest('hex');

console.log(one, typeof two)