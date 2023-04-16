function solution(park, routes) {
    let start = [0,0]
    const direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    
    // 시작점 찾기
    for(let i = 0; i < park.length; i++) {
        const findIndex = park[i].indexOf('S');
        if(findIndex > -1) {
            start = [i, findIndex];
            break;
        }
    }
    
    // 거리만큼 반복
    routes.forEach((route,index) => {
        const [pos,range] = route.split(' ')
        let [y,x] = [...start]
        let success = true

        for(let i=0;i<range;i++){
            
            y += direction[pos][0]
            x += direction[pos][1]
        
            // 장애물 및 공원 이탈 확인
            if(y < 0 || y >= park.length) {
                success = false;
                break;
            }
            if(x < 0 || x >= park[0].length) {
                success = false;
                break;
            }
            if(park[y][x] === 'X') {
                success = false;                                
                break;
            }
        }
    
        if(success)start = [y,x]
    })
    
    return start;
}
