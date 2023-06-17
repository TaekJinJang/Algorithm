function solution(keymap, targets) {
    var answer = [];
    let keyBtn = keymap.reduce((key,map)=> {
        [...map].forEach((m,i)=>{
            key[m] = Math.min(key[m] || i+1,i+1)
        })
        return key
    },{})
    
    targets.forEach(target=>{
        let count = 0;
        [...target].forEach(t=>{
            count += keyBtn[t]
        })
        
        answer.push(count || -1)
    })
    
    
    return answer;
}

