const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/1436/example.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

let num = 666;
let cnt = 1;

while (cnt !== input) {
  num++;
  if (String(num).includes("666")) cnt++;
}

console.log(num);
