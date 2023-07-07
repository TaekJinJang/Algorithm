const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/17285/example.txt';

const input = require('fs').readFileSync(filePath).toString().trim();

let str = '';
let key = 0;

while (str !== 'CHICKENS') {
  str = '';
  key++;
  for (let i = 0; i < 8; i++) {
    const ele = input[i].charCodeAt();

    str += String.fromCharCode(ele ^ key);
  }
}

let answer = '';

[...input].forEach((ele) => {
  ele = ele.charCodeAt();
  answer += String.fromCharCode(ele ^ key);
});

console.log(answer);
