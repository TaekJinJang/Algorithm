const DIRECTION = Object.freeze({
    U : [0, -1],
    D : [0, 1],
    L : [-1, 0],
    R : [1, 0],
})

const getMoveDir = (moveDir,dir) => {
    const [x,y] = moveDir

    switch(dir) {
        case "U" : {
            return [x+DIRECTION["U"][0],y+DIRECTION["U"][1]]
        }
        case "D": {
            return [x + DIRECTION["D"][0], y + DIRECTION["D"][1]];
    }
        case "L": {
            return [x + DIRECTION["L"][0], y + DIRECTION["L"][1]];
    }
        case "R": {
            return [x + DIRECTION["R"][0], y + DIRECTION["R"][1]];
    }
            default : return []
    }
}
const getDuplicateDir = (curDir,visited) => {
    const [coorX,coorY] = curDir;
    const duplicateDir = visited.filter(([prevX,prevY])=>{
        
        return (
        prevX[0] === coorX[0] &&
        prevX[1] === coorX[1] &&
        prevY[0] === coorY[0] &&
        prevY[1] === coorY[1] 
        )
        
    })
    return duplicateDir.length === 0
}

function solution(dirs) {
    let answer = 0;
    const visited = [];
    let [x,y] = [0,0];
    
    [...dirs].forEach((dir)=> {
        let [nx,ny] = getMoveDir([x,y],dir)
        const coorX = [x,nx].sort((a,b)=>a-b);
        const coorY = [y,ny].sort((a,b)=>a-b);

        if(Math.abs(nx) <= 5 && Math.abs(ny) <= 5) {
            if(getDuplicateDir([coorX,coorY],visited)) {
            answer++;
            visited.push([coorX,coorY])
            }
        [x,y] = [nx,ny]
        }
        
        
    })

    
    return answer;
}