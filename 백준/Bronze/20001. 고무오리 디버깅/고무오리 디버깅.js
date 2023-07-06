const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/20001/example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let stack = [];

let arr = input.slice(1, -1);

arr.forEach((ele) => {
  if (ele === "문제") {
    stack.push(1);
  }
  if (ele === "고무오리") {
    if (stack.length === 0) {
      stack.push(1);
      stack.push(1);
    } else stack.pop();
  }
});
if (stack.length === 0) console.log("고무오리야 사랑해");
else console.log("힝구");
