function solution(maps) {
    maps = maps.map(map=>map.split(''))
    const [n,m] = [maps.length,maps[0].length]
    const [dy, dx] = [[-1, 0, 1, 0], [0, 1, 0, -1]];
    
    const dfs = (y,x,num) => {
        let sum = Number(num);
        
        for(let i=0;i<4;i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(ny >= 0 && ny < n && nx >= 0 && nx < m) {
                let next = maps[ny][nx];
                if(next !== 'X') {
                    maps[ny][nx] = 'X';
                    sum += dfs(ny,nx,next);
                } 
            }
        }
        return sum
    }
    
    const answer = [];

    for(let y = 0; y < n ; y++){
        for(let x = 0; x < m ; x++){
            
            if(maps[y][x] !== 'X') {
                const start = maps[y][x];
                maps[y][x] = 'X';
                answer.push(dfs(y,x,start))
            }
        }
    }

    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b)
}

