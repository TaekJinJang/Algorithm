function solution(k, d) {
    let answer = 0;
    const getY = (num) => {
        return Math.sqrt(d**2 - num ** 2)
    }
    
    for(let i=0;i<=d; i += k) {
        const y = getY(i);
        answer += Math.floor(y/k) + 1
    }
    

    return answer;
}