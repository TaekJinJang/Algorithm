function solution(participant, completion) {
    let answer = new Map();

    completion.forEach(c=>{
        if(answer.has(c)) answer.set(c,answer.get(c)+1)
        else answer.set(c,1)
    })
    
    for(const p of participant) {
        if(!answer.has(p) || answer.get(p) === 0) return p
        else answer.set(p,answer.get(p)-1)
    }

}