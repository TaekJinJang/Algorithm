const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/2217/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

input.sort((a, b) => a - b);

let max = 0;

input.forEach((ele, i) => {
  max = Math.max(max, ele * (n - i));
});

console.log(max);
