const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/2309/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cnt = 0;
let answer = [];
const sum = input.reduce((acc, cur) => (acc += cur), 0);

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    const fail = input[i] + input[j];

    if (sum - fail === 100) {
      answer = input
        .filter((p, index) => index !== i && index !== j)
        .sort((a, b) => a - b);
      break;
    }
  }
}
answer.forEach((a) => console.log(a));
