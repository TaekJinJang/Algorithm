function solution(expression) {
    const dfs = (op,arr,visited) => {
        // 최대가 6개라 굳이 재귀를 쓰지 않아도 되지만 연습삼아
        if(arr.length === 3) {
            prior.push(arr)
        }
        for(let i=0;i<op.length;i++){
            if(visited[i]) continue;
            const temp = [...arr,op[i]];
            visited[i] = 1
            dfs(op,temp,visited);
            visited[i] = 0;
        }
    }
    const calc = (a,b,op) =>  {
        [a,b] = [parseInt(a),parseInt(b)]
        switch (op) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
        }
    }
    expression = expression.match(/\d+|[\+\-\*]/g);
    // ex) '50*6-3*2' => ['50','*','6','-','3','*','2'] 
    let max = 0;
    const prior = [];
    dfs(['+','-','*'],[],[0,0,0])
    
    for(let i=0;i<prior.length;i++){
        let temp = [...expression];
        for(let j=0; j<prior[i].length;j++){
            let idx = 0;
            while(true) {
                idx = temp.indexOf(prior[i][j])
                if(idx === -1 ) break;
                let sum = calc(temp[idx-1],temp[idx+1],prior[i][j])
                temp.splice(idx-1,3,sum)
            }
        }
        max = Math.max(max,Math.abs(temp))
    }
    
    return max;
}