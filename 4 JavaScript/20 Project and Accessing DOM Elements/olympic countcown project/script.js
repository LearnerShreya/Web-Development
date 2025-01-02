
// function timing(){
// const timer = document.getElementById('timer');
// const currentDate = new Date();
// const olympicsDate = new Date("2028-07-14T00:00:00"); 
// const timeRemaining = olympicsDate - currentDate;

// const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
// const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
// const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
// const seconds = Math.floor((timeRemaining / 1000) % 60);
// }
// setInterval(timing,1000);

// console.log(`Olympics Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);


function timing(){
const timer = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
}
setInterval(timing,1000);

const timer = document.getElementById('root');
timer.style.fontSize = "100px";
timer.style.display = "flex";
// timer.style.height = "100vh";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";