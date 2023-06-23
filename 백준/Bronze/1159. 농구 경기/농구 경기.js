const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/1159/example.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = input.shift();

let choice = input.reduce((obj, player) => {
  obj[player[0]] = (obj[player[[0]]] || 0) + 1;
  return obj;
}, {});

const playerCount = Object.keys(choice);
const pickPlayer = playerCount
  .filter((ele) => choice[ele] >= 5)
  .sort()
  .join('');

if (pickPlayer.length === 0) console.log('PREDAJA');
else console.log(pickPlayer);
