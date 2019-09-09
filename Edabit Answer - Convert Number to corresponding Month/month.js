// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// Months
// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December
// Examples
// month_name(3) ➞ "March"

// month_name(12) ➞ "December"

// month_name(6) ➞ "June"

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month_name = num => month[num.toLocaleString() -1];