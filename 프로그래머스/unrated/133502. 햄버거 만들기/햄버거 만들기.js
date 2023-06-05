function solution(ingredient) {
    const stack = [];

    const answer = ingredient.reduce((cnt, cur) => {
        stack.push(cur);
        if (stack.length < 4) return cnt;
        if (stack.slice(-4).join('') !== '1231') return cnt;
        stack.splice(-4);
        return cnt + 1;
    }, 0);

    return answer;
}