/*

팁은 원래 주려던 돈 - (등수 - 1)
만약 음수라면 팁을 못받음
ex) 3원을 주려했고 1등이라면 3 - (1 - 1) = 3
*/

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/1758/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
let answer = 0;

input.sort((a, b) => b - a);

input.forEach((ele, i) => {
  if (ele - i >= 1) answer += ele - i;
});

console.log(answer);
