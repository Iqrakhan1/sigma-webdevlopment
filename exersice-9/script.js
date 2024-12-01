// Faulty Calculator

// Get user inputs
let first = parseFloat(prompt("Enter the first number:"));
let opration = prompt("Enter the operation (+, -, *, /):");
let second = parseFloat(prompt("Enter the second number:"));

// Map for faulty operations
const obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**", // Power operation
};

// Generate a random value
let rendom = Math.random();
console.log("Generated random number:", rendom);

// Decide based on the random number
if (rendom > 0.1) {
  // Perform the correct operation
  console.log(`Performing correct operation: ${first} ${opration} ${second}`);
  alert(`The result is: ${eval(`${first} ${opration} ${second}`)}`);
} else {
  // Perform a faulty operation
  opration = obj[opration];
  console.log(`Performing faulty operation: ${first} ${opration} ${second}`);
  alert(`The result is: ${eval(`${first} ${opration} ${second}`)}`);
}
