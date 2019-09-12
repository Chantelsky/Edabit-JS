// Write a function that returns true if an object is empty, and false otherwise.

// Examples
// isEmpty({}) ➞ true

// isEmpty({ a: 1 }) ➞ false

const isEmpty = obj => Object.keys(obj).length === 0 ? true : false;