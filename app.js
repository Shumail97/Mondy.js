// Prompt user to enter a number to calculate the factorial
var num = parseInt(prompt("What number do you want to find the factorial of?"), 10);

// // Iterative solution
// function factorialIterative(n) {
//     let result = 1; // Start with 1 since multiplying by 1 has no effect
//     for (let i = 2; i <= n; i++) { // Start from 2 to n
//         result *= i; // Multiply result by i
//     }
//     return result; // Return the final result
// }

// Recursive solution
var factorialRecursive = function(n) {
    if (n === 0) {
        return 1; // Base case: 0! = 1
    } else {
        return n * factorialRecursive(n - 1); // Recursive case
    }
};

// Call the functions and log the results
console.log(`Iterative: ${factorialIterative(num)}`);
console.log(`Recursive: ${factorialRecursive(num)}`);
