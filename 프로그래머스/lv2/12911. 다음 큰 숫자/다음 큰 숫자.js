function solution(n) {
    var answer = 0;
    let temp = n.toString(2).split("1").length
    while(true) {
        n++
        if(n.toString(2).split("1").length === temp) return n
    }
    return answer;
}