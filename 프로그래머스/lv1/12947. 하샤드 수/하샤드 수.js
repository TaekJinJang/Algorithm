function solution(x) {
    var answer = true;
    let num = 0;
    x = String(x)
    for(let i of x) {
        num +=Number(i)
    }
    console.log(num)
    if(x%num !== 0 ) answer = false 
    return answer;
}