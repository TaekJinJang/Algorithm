const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/3085/example.txt";

let n = +require("fs").readFileSync(filePath).toString().trim();

let answer = 0;

function solution(n) {
  if (n <= 1 || n === 3) return -1;
  if (n / 5 >= 1) {
    answer += Math.floor(n / 5);
  }

  n -= answer * 5;
  if (n % 2 !== 0) {
    answer--;
    answer += Math.ceil(n / 2) + 2;
  } else answer += n / 2;

  return answer;
}

console.log(solution(n));
