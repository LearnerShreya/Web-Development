
// Date Calculation

const date1 = new Date();
const date2 = new Date("2025-11-02");

console.log(date2-date1) // diff in milisecond
console.log(date2>date1)


// Olympics Countdown Timer

const currentDate = new Date(); // Current date and time
const olympicsDate = new Date("2028-07-14T00:00:00"); // Olympics start date

// Calculate the difference in milliseconds
const timeRemaining = olympicsDate - currentDate;

// Convert the difference to days, hours, minutes, and seconds
const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
const seconds = Math.floor((timeRemaining / 1000) % 60);

// Display the countdown in a readable format
console.log(`Olympics Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);