function solution(my_string) {
    var answer = '';
    let cnt = my_string.length
    for(i=cnt-1;i>=0;i--){
        answer = answer + my_string[i]
    }
    return answer;
}