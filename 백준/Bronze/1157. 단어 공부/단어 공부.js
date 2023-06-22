const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  input = input.toUpperCase();
  const word = [...input].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let answer = [];
  const sortWord = Object.values(word).sort((a, b) => b - a);

  for (const key in word) {
    if (word[key] === sortWord[0]) answer.push(key);
  }

  return answer.length > 1 ? '?' : answer[0];
}

console.log(solution(input));
