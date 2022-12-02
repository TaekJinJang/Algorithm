// 4! = 4*3*2*1 = 24
// n! = n * (m-1)*...* 1

//nCr = n! / ((n-4)! * r!)

function solution(balls, share) {
    var answer = 0;
    
    const n = balls;
    const r = share;
    
    let one = 1;
    for ( i=n;i>=n-r+1;i--) {
        one *= i;
    }
    let two = 1;
    for (i=n-r;i>=1;i--) {
        two *= i;
    }
    let three = 1;
    for (i=r;i>=1;i--) {
        three *= i;
    }
    answer = Math.floor(one / three)
    
    return answer;
}