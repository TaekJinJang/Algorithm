const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/1912/example.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = +input.shift();

let arr = input[0].split(' ').map(Number);

let dp = [arr[0]];

for (let i = 1; i < n; i++) {
  dp[i] = arr[i] > arr[i] + dp[i - 1] ? arr[i] : arr[i] + dp[i - 1];
}

console.log(Math.max(...dp));
