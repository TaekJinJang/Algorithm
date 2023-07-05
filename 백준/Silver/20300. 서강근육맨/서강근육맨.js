const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/20300/example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
let arr = input[0]
  .split(' ')
  .map(BigInt)
  .sort((a, b) => (a < b ? -1 : 1));

let max = 0;
if (arr.length % 2 === 1) {
  max = arr.pop();
}

while (arr.length !== 0) {
  let sum = arr.shift() + arr.pop();
  max = sum > max ? sum : max;
}

console.log(String(max));
