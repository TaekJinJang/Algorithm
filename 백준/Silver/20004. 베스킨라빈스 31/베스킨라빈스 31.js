const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/20004/example.txt";

const input = +require("fs").readFileSync(filePath).toString().trim();

for (let i = 1; i <= input; i++) {
  if (30 % (i + 1) == 0) console.log(i);
}
