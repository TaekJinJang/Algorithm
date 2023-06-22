function solution(n, t, m, p) {
    let answer = '';
    let str = '';

    for(let i=0;i<t*m;i++){
        const num = i.toString(n);
        str+=(num)
    }

    str = str.toUpperCase();
    let count = 0;
    while(answer.length !== t) {
        const s = str.substring(count,count+m);
        answer += s[p-1]
        count += m
    }

    
    return answer
}