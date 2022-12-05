function solution(numbers, k) {
    var answer = 1;
    for(i=0;;i+=2){ // 0 2 4 6 8 10  ~ 
        i %= numbers.length; 
        const item = numbers[i];
        if(answer === k) {
            return item;
        }
        answer ++;
    }

}

// 공은 1,3,5,7 ~ 식으로 넘어감
// k번째는 누군지 ?
// 홀수와 짝수 힌트를 눈치채야함