function solution(number, k) {
    let answer = '';
    let stack = [];
    
    for(let i=0;i<number.length;i++){
        const item = number[i]
        while (k>0 && item > stack[stack.length-1]) {
            k--;
            stack.pop()
        }
        stack.push(item)
    }

    
    stack.splice(number.length-k,k)
    answer = stack.join('')
    return answer;
}