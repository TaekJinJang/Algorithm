function solution(n, t, m, p) {
    var answer = '';
    let allStr=""
    let cnt = 0
    
    for(let i=0;i<t*m;i++){
        allStr+=i.toString(n)
    }
    
    while(answer.length < t) {
        const str = allStr.substr(cnt,m)
        answer += str[p-1]
        cnt += m;
        
    }
    
    return answer.toUpperCase();
}