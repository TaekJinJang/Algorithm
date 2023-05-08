function solution(land) {
  for(let row = 1; row < land.length; row++) {
    for(let col = 0; col < 4; col++) {
      const prevLow = land[row - 1]
      land[row][col] += Math.max(...prevLow.filter((_, prevCol) => 
          col !== prevCol
      ));
    }
  }
  return Math.max(...land.at(-1))
}