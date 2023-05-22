function solution(N, road, K) {
    const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const lines = Array(N + 1).fill().map((_)=>[])
    let answer = 0;

    road.forEach((node) => {
    // 연결되어 있는 경로를 모두 lines배열에 저장한다.
        let [a, b, c] = node;
        lines[a].push({ to: b, cost: c });
        lines[b].push({ to: a, cost: c });
    });
    let queue = [{ to: 1, cost: 0 }];
    arr[1] = 0;
    while(queue.length) {
        let {to} = queue.pop();
        lines[to].forEach((next)=> {
            if(arr[next.to] > arr[to] + next.cost) {
                // 기존 경로의 값보다 우회하는 값이 더 작으면 해당 값 저장
                arr[next.to] = arr[to] + next.cost;
                queue.push(next)
            }
        })
    }
    
    answer = arr.filter((item) => item <= K).length

    return answer;
}