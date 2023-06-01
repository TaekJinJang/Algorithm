function solution(s){

    let stack = [];
    
    if(s[0] === ")") return false;
    [...s].forEach((str) => {
        if(str === '(') stack.push(str);
        if(str === ')') {
            if(stack.length === 0) return false;
            else stack.pop();
        }
    });
    let answer = stack.length === 0 ? true : false
    
    return answer;
}