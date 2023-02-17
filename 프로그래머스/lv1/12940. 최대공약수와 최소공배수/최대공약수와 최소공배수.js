function solution(n, m) {
    var answer = [];
    let gcd = 0
    for(let i=1;i<=n;i++){
        if(n%i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    answer.push(gcd)
    answer.push((n*m)/gcd)
    return answer;
}