const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/23348/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const score = input.shift().split(" ").map(Number);
const n = +input.shift();
let sum = 0;

for (let i = 0; i < n; i++) {
  let temp = 0;
  for (let j = 0; j < 3; j++) {
    let level = input[j].split(" ").map(Number);
    temp += level[0] * score[0] + level[1] * score[1] + level[2] * score[2];
  }

  sum = Math.max(sum, temp);
  input.splice(0, 3);
}
console.log(sum);
