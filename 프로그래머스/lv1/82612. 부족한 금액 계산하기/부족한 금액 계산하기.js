function solution(price, money, count) {
    var answer = 0;
    let countNum = 0
    while(countNum !== count ) {
        answer += price * (countNum +1)
        countNum ++;
    }
    return answer - money <= 0 ? 0 : answer - money;
}

// 가진돈으로 n만큼타면 얼마가 부족한지