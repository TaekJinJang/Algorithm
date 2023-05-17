const sumQueue = (q) => {
    return q.reduce((acc,cur) => acc+cur,0)
}

function solution(queue1, queue2) {

    let [sumQueue1,sumQueue2] = [sumQueue(queue1),sumQueue(queue2)]
    let [pointA,pointB] = [0,queue1.length]
    const sameQueue = (sumQueue1 + sumQueue2) / 2
    
    let queue = [...queue1,...queue2]
    const end = queue1.length * 3
    
    for(let i=0;i<end;i++){
        if(sumQueue1 === sameQueue) return i
        
        if(sumQueue1 > sameQueue) sumQueue1 -= queue[pointA++]
        else sumQueue1 += queue[pointB++]
        
    }
    
    return -1;
}

