function solution(board, moves) {
  let result = 0;
  const stack = [];

  for (const move of moves) {
    const curLocation = move - 1;

    for (const row of board) {
      if (row[curLocation] !== 0) {
        if (stack.at(-1) === row[curLocation]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(row[curLocation]);
        }
        row[curLocation] = 0;
        break;
      }
    }
  }

  return result;
}
