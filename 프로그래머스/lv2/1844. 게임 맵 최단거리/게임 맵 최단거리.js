function solution(maps) {
  let dx = [0, 1, 0, -1],
    dy = [-1, 0, 1, 0];
  let queue = [];
  let [n, m] = [maps.length - 1, maps[0].length - 1]
  queue.push([0, 0]);
  maps[0][0] = 0;
  let answer = 1;
  while(queue.length) {
    const size = queue.length
    for(let i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      for(let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if(nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
          if (nx === n && ny === m) {
            return ++answer;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
}