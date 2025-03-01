// Function that accepts a callback function as an argument
function names(fun){
    // Prints a greeting message
    console.log("Hello I am name");

    // Executes the passed callback function
    fun();
}

// Declaring a callback function called 'greet'
const greet = function (){
    // Prints a message when called
    console.log("I am call Back Function");
}

// Calling the 'names' function and passing the 'greet' function as a callback
names(greet);

// Calling the 'names' function and passing an anonymous function as a callback
names(function (){
    // Prints a message when the anonymous callback function is called
    console.log("I am call Back Function");
});

// Calling the 'names' function and passing an arrow function as a callback
names(() => {
    // Prints a message when the arrow callback function is called
    console.log("I am call Back Function");
});

// Function to simulate fetching data (mocking data fetch operation)
function fetchData(){
    // bhut saara 
    console.log("I am fetching data");
}

// Using setInterval to call the fetchData function every 5000 milliseconds (5 seconds)
setInterval(fetchData, 5000);  // 5000 is here in milliseconds = 5 seconds
