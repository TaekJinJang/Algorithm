function solution(s) {
    var answer = '';
    let max = s.split(' ').sort((a,b)=>b-a).slice(0,1)
    let min = s.split(' ').sort((a,b)=>b-a).slice(-1)
    answer = min +" " + max
    return answer;
}