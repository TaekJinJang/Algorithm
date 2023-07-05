const filePath =
  process.platform === "linux" ? "/dev/stdin" : "b/3085/example.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const distance = input[0].split(" ").map((v) => BigInt(v));
const price = input[1].split(" ").map((v) => BigInt(v));

let curPrice = price[0];
let cost = 0n;

for (let i = 0; i < n - 1; i++) {
  cost += curPrice * distance[i];
  if (curPrice > price[i + 1]) curPrice = price[i + 1];
}

console.log(String(cost));
