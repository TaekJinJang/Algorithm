const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/17291/example.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();

const arr = input[0].split(' ').map((ele, i) => {
  return ele - (n - i);
});

console.log(Math.max(...arr));

// const arr = input.map((ele,i)=>)

// 입력값을 새로 받아줌
// ele - (length - i)
