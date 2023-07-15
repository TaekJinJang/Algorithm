const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/13560/example.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const point = input[0].split(" ").map(Number);
point.sort((a, b) => a - b);

const distPoint = (n * (n - 1)) / 2;

let answer = 1;

function solution(n, point) {
  const sum = point.reduce((acc, cur) => acc + cur, 0);

  if (sum !== distPoint) answer = -1;

  let upset = 0;

  for (let i = 0; i < n; i++) {
    upset += point[i] - i;
    if (upset < 0) answer = -1;
  }

  return answer;
}

console.log(solution(n, point));
