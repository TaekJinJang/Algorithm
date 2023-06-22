const isPrime = (n) => {
    if(n < 2) return false
    for(let i=2;i<=parseInt(Math.sqrt(n));i++){
        if(n % i === 0) return false;
    }
    return true
}



function solution(n, k) {
    let answer = 0;
    const numArr = n.toString(k).split("0")
    numArr.forEach(n=>{
        if(isPrime(n)) {
            answer++

        }
    })
    
    
    return answer;
}