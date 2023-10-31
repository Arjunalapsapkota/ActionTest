const fs = require("fs");

// Function to calculate the Fibonacci series up to n numbers
function generateFibonacci(n) {
  const fibonacciSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

// Read the value of 'n' from a file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    process.exit(1);
  }

  const n = parseInt(data);

  if (isNaN(n) || n < 0) {
    console.error(
      "Invalid input. Please provide a non-negative integer in the input file."
    );
    process.exit(1);
  }

  const fibonacciSeries = generateFibonacci(n);

  // Write the Fibonacci series to a text file
  fs.writeFile("output.txt", fibonacciSeries.join(", "), "utf8", (err) => {
    if (err) {
      console.error("Error writing to output file:", err);
      process.exit(1);
    }

    console.log(
      `Fibonacci series up to ${n} numbers has been written to output.txt.`
    );
  });
});
