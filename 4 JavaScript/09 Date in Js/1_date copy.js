// Create a new Date object with the current date and time
const d = new Date();
console.log(d); // Logs the complete date and time object
console.log(d.toString()); // Converts the date object to a string
console.log(d.toDateString()); // Logs the date in a human-readable string format (e.g., "Wed Dec 03 2024")

console.log(typeof d); // Logs the type of the variable `d`, which is "object"

// Explanation:
// Dates in JavaScript are generated using the system's clock. The date and time are retrieved from the system's hardware.

// Create a date object using milliseconds since January 1, 1970, 00:00:00 UTC
const e = new Date(1); // 1 millisecond after the epoch time
console.log(e); // Logs the date corresponding to this timestamp

// Create a date object using a large millisecond value
const f = new Date(1800000000000); // Represents a future date
console.log(f); // Logs the date corresponding to this timestamp

// Example of creating a date object using a millisecond timestamp
const g = new Date(1730486400000); // 1730486400000 milliseconds from January 1, 1970
console.log(g.toLocaleString()); // Logs the date in a localized string format

// Get specific parts of the current date
console.log(d.getDate()); // Returns the day of the month (1-31)
console.log(d.getDay()); // Returns the day of the week (0 = Sunday, 1 = Monday, etc.)
console.log(d.getMonth()); // Returns the month (0 = January, 1 = February, etc.)
console.log(d.getFullYear()); // Returns the full year (e.g., 2024)
console.log(d.getMilliseconds()); // Returns the milliseconds (0-999)
console.log(d.getHours()); // Returns the hours (0-23)
console.log(d.getMinutes()); // Returns the minutes (0-59)
console.log(d.getSeconds()); // Returns the seconds (0-59)

// Get the timestamp of the current date (milliseconds since January 1, 1970)
console.log(d.getTime());

// Get the current timestamp using `Date.now()`
const now = Date.now();
console.log(now); // Logs the current timestamp in milliseconds

// Create a Date object using a specific date string
const da = new Date("2022-10-20");
console.log(da); // Logs the date corresponding to the provided string

// Create a Date object with a specific date and time string
const dat = new Date("2022-10-20T10:10:12");
console.log(dat); // Logs the date and time corresponding to the provided string

// Modify an existing Date object using setter methods
const de = new Date();
de.setDate(20); // Set the day of the month to 20
de.setFullYear(2021); // Set the year to 2021
de.setMonth(3); // Set the month to April (0 = January, so 3 = April)
console.log(de); // Logs the updated date object
console.log(de.toString()); // Logs the updated date in string format
console.log(de.toLocaleDateString()); // Logs the updated date in a localized string format
