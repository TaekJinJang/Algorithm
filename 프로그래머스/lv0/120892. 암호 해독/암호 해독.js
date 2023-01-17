function solution(cipher, code) {
    var answer = '';
    for(i=1;i<=cipher.length;i++){
        const item = cipher[i-1]
        if(i % code === 0) {
            answer += item
        }
    }
    return answer;
}