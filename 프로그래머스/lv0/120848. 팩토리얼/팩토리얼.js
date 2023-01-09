function solution(n) {
    var answer = 0;
    let num = 1;
    for(i=1;;i++){
        num *= i;
        answer ++;

        if (n < num) {
            return answer - 1
        }
        if (num === n) {
            return answer
        }
    }
    
    return answer;
}