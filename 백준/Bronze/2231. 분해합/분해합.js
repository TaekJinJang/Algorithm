const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
  rl.close();
});

rl.on('close', () => {
  /*입력이 끝나고 실행할 코드*/
  // console.log(input);
  console.log(solution(Number(input)));
  process.exit();
});

function solution(input) {
  // let answer = [];

  for (let i = 1; i < input; i++) {
    let sum = i;
    const strNum = sum.toString();
    for (let j = 0; j < strNum.length; j++) {
      sum += Number(strNum[j]);
    }
    if (sum === input) return i;
  }

  return 0;
}
