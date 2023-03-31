function solution(n, lost, reserve) {

    // 여벌의 체육복을 가지고 있는 도난당한 학생들을 다 제외
    let realLost=lost.filter((l)=>!reserve.includes(l));
    let realReserve=reserve.filter((r)=>!lost.includes(r));
    
    let num = realLost.length
    
    realLost.sort()
    realReserve.sort()

    
    
    for(let i=0;i<realLost.length;i++){
        let item = realLost[i]
        
        for(let j=0;j<realReserve.length;j++){
            let item2 = realReserve[j]

            if(Math.abs(item-item2) == 1) {
                num --;
                realReserve.splice(j,1)
                break;
            }
            
        }

    }
    return n-num
}