function solution(n, m, section) {
    let idx = section[0]
    let result = 0
    
    section.forEach((e)=>{
        if(e>=idx) {
            idx = m + e
            result ++
        }

    })
    
    return result;
}