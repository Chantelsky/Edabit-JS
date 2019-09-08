// Create a function that returns the smaller number.

// Examples
// smallerNum("21", "44") ➞ "21"

// smallerNum("1500", "1") ➞ "1"

// smallerNum("5", "5") ➞ "5"
// Notes
// Numbers will be represented as strings, and your output should also be a string.
// If both numbers tie, return either number.
// Numbers will be positive.

const smallerNum = (n1,n2) => Math.min(n1,n2).toString();