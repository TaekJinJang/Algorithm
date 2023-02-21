function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=>a-b)
    let bud = budget
    
    for(let i=0; i<d.length;i++){
        if(d[i]>bud) break;
        bud -=d[i]
        answer ++;    
        console.log(bud)
        if(bud<d[i+1]) break;
    }
    return answer;
}