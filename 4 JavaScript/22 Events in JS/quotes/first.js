const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "It does not matter how slowly you go, as long as you do not stop. — Confucius",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
  "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
  "Dream big and dare to fail. — Norman Vaughan",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "It always seems impossible until it's done. — Nelson Mandela",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Act as if what you do makes a difference. It does. — William James",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Courage is resistance to fear, mastery of fear—not absence of fear. — Mark Twain",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "Perseverance is not a long race; it is many short races one after the other. — Walter Elliot",
  "If you want to achieve greatness stop asking for permission. — Anonymous",
  "The man who has confidence in himself gains the confidence of others. — Hasidic Proverb",
  "Small daily improvements are the key to staggering long-term results. — Anonymous",
  "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "The best revenge is massive success. — Frank Sinatra",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Challenges are what make life interesting, and overcoming them is what makes life meaningful. — Joshua J. Marine",
  "Don’t limit your challenges. Challenge your limits. — Anonymous",
  "Success doesn’t just find you. You have to go out and get it. — Anonymous",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. — Anonymous",
  "Failure is the condiment that gives success its flavor. — Truman Capote",
  "The difference between ordinary and extraordinary is that little extra. — Jimmy Johnson",
  "What we achieve inwardly will change outer reality. — Plutarch",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "Do not wait to strike till the iron is hot; but make it hot by striking. — William Butler Yeats",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll"
];


const button = document.querySelector('button');

button.addEventListener('click', (event)=>{
  
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.clientY);
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

})


//  Chnage the background color in every 5 second

document.addEventListener('keydown', (event)=>{
  
  if(event.key==="Enter")
  {
    const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
  }

  console.log(event.target);
})




//  Chnage the background color in every 5 second

// function changeColor() {
//   const bodyElement = document.getElementsByTagName("body")[0];

//   // Generate random RGB color
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   // Create an RGB color string
//   const randomColor = `rgb(${r}, ${g}, ${b})`;

//   // Apply the random color to the body's background
//   bodyElement.style.backgroundColor = randomColor;
// }

// // Call the function every 5000 milliseconds (5 seconds)
// setInterval(changeColor, 5000);
