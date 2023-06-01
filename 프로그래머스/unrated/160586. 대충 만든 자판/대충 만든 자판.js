function solution(keymap, targets) {
    var answer = [];
    const key = keymap.reduce((key,keymap) => {
        [...keymap].forEach((k,i) => {
            key[k] = Math.min(key[k] || i+1, i +1)       
        })
        return key
    },{});
    
    [...targets].forEach((target) => {
        let count = 0;
        [...target].forEach((t) => {
            count += key[t]
        })
        answer.push(count || -1)
    })
    
    return answer;
}

