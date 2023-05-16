function solution(n) {
    let answer = [];
    const arr = Array(n).fill().map((_,i)=>Array(i+1).fill(0));
    
    let [num,x,y] = [0,-1,0];
    
    while(n > 0) {
        for(let i=0; i<n;i++) arr[++x][y] = ++num;
        for(let i=0; i<n-1;i++) arr[x][++y] = ++num;
        for(let i=0; i<n-2;i++) arr[--x][--y] = ++num;
        n -= 3;
    }
    
    for(let i=0;i<arr.length;i++){
        answer.push(...arr[i])
    }
    
    return answer;
}