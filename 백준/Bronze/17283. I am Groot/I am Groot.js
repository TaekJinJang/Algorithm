const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/17283/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [L, R] = input;
let sum = 0;
let index = 2;
while (true) {
  let length = Math.floor(L * (R / 100));
  if (length <= 5) break;
  sum += length * index;
  L = length;
  index *= 2;
}

console.log(String(sum));
