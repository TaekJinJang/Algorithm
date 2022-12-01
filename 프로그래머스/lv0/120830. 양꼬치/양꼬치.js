function solution(n, k) {
    var answer = 0;
    let price = (n * 12000) + (k*2000)
    let sale = 0
    
    if (n >= 10) {
        sale = Math.floor((n/10)) * 2000
    }
    return price - sale
}

// 10으로 나눠서 몫 만큼 음료수값을 빼줌