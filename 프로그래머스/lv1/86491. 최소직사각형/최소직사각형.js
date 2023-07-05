function solution(sizes) {
    let answer = 0;
    
    let [w,h] = [0,0];
    
    for(let i=0;i<sizes.length;i++){
        
        let max = Math.max(...sizes[i])
        let min = Math.min(...sizes[i])
        w = Math.max(max,w)
        h = Math.max(min,h)
    }
    
    return w*h;
}

/*

통틀어서 가장 큰 수를 찾고
그 수의 반대되는 곳 ( w 면 h) 에서 w가 더 작다면 뒤집어줌


*/