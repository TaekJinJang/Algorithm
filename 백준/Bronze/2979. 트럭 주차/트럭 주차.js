const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  // rl.close();
});

rl.on('close', () => {
  /*입력이 끝나고 실행할 코드*/
  //console.log(input);
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  let [A, B, C] = input.shift();
  let sum = 0;
  const arr = Array(101).fill(0);
  input.forEach((ele, i) => {
    const [start, end] = ele;
    for (let i = start; i < end; i++) {
      arr[i]++;
    }
  });

  arr.forEach((time) => {
    if (time === 1) sum += A;
    if (time === 2) sum += B * 2;
    if (time === 3) sum += C * 3;
  });

  return sum;
}
