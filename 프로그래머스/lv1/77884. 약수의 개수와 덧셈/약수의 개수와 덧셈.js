function solution(left, right) {
    var answer = 0;
    let cnt = 0
    for (let i = left;i<=right;i++){
        cnt = 0
        for(let j=i;j<=right;j--){
            if(i%j === 0) cnt ++
            if(j < 0) break;
        }
        answer = cnt%2 === 1 ?answer + i:answer -i
    }
    return answer;
}