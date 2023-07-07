const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/17288/example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let answer = 0;
let stack = [input[0]];

[...input].forEach((ele) => {
  ele = +ele;
  if (stack.at(-1) + 1 === ele) {
    if (stack.length === 3) {
      stack = [];
      answer--;
      return;
    }
    stack.push(ele);
  } else stack = [ele];
  if (stack.length === 3) answer++;
});

console.log(answer);
