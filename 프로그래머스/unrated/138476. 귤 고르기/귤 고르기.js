function solution(k, tangerine) {
    let answer = 0;
    const tangerineMap = tangerine.reduce((map,t) => {
        return map.set(t,(map.get(t) || 0) + 1)
    },new Map())
    
    const counts = [...tangerineMap.values()].sort((a,b)=>a-b)
    
    while(k>0) {
        k -= counts.pop()
        answer++
    }
        

    return answer;
}

