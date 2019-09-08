// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Examples
// isInOrder("abc") ➞ true

// isInOrder("edabit") ➞ false

// isInOrder("123") ➞ true

// isInOrder("xyzz") ➞ true

const isInOrder = str => str === str.split("").sort().join("")? true : false;