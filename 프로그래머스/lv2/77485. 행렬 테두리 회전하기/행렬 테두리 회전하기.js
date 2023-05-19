function solution(rows, columns, queries) {
    var answer = [];
    let cnt = 1
    const matrix = Array(rows).fill().map((_,i)=>Array(columns).fill().map((_,j)=>cnt++))
    
    queries.forEach((query) => {
        let [x1,y1,x2,y2] = query;
        [x1,y1,x2,y2] = [x1-1,y1-1,x2-1,y2-1]
        
        let stack = []
        for(let i = y1; i < y2;i++) stack.push(matrix[x1][i]);
        for(let i = x1; i < x2;i++) stack.push(matrix[i][y2]);
        for(let i = y2; i > y1;i--) stack.push(matrix[x2][i]);
        for(let i = x2; i > x1;i--) stack.push(matrix[i][y1]);
        
        answer.push(Math.min(...stack))
        stack.reverse()
        const temp = stack.shift();
        stack.push(temp);

        for (let i = y1; i < y2; i++) matrix[x1][i] = stack.pop();
        for (let i = x1; i < x2; i++) matrix[i][y2] = stack.pop();
        for (let i = y2; i > y1; i--) matrix[x2][i] = stack.pop();
        for (let i = x2; i > x1; i--) matrix[i][y1] = stack.pop();
    })
        
    
    // i 행 j 열에 있는 숫자는 ((i-1) x columns + j)입니다.
    return answer;
}