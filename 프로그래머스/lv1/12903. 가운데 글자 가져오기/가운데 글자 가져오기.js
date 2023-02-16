function solution(s) {
    let mid = Math.floor(s.length/2)
    let answer = ''
    if (s.length % 2 === 1) {
        answer += s.substr(mid,1)
    } else answer += s.substr(mid-1,2)
    
    

    return answer;
}