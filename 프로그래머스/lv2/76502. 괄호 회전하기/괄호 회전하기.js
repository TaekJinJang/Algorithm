function solution(s) {
    let answer = 0;
    let string = [...s]; 

    for (let i = 0; i < s.length; i++) {
        const stack = [];
        for (const x of string) {
            const top = stack[stack.length-1];
            if (top === '(' && x === ')' || top === '[' && x === ']' || top === '{' && x === '}') stack.pop();
            else stack.push(x);
        }
        if (stack.length === 0) answer++;
        string.push(string.shift()); // 문자열을 왼쪽으로 돌리기 

    }
    return answer;
}