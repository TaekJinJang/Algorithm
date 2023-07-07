const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/17292/example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();

let arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let stack = [];
let answer = 0;
arr.forEach((ele) => {
  if (ele % 2 === 1) {
    stack.push(ele);
    if (stack.length === 2) {
      answer += stack[0] + stack[1];
      stack = [];
    }
  } else answer += ele;
});

console.log(answer);

/*

홀수 + 홀수 = 짝수
짝수 + 짝수 = 짝수

*/
