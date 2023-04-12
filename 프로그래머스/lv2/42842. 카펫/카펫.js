function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow
    
    for(let i=3;i <= sum / i ;i++){ // 최소 w,h = 3
        let w = sum / i
        let h = i
        if((w-2)*(h-2) === yellow) {
            answer[0] = w, answer[1] = h
        }
    }
    
    return answer;
}

    
// 2x + 2y - 4 = brown
// (x - 2)(y - 2) = yellow
// x = (brown / 2) + 2 - y;
// (brown / 2 - y)(y - 2) = yellow
// (y - brown / 2)(y - 2) = - yellow;
// y ^2 - (2 + brown / 2)y + brown + yellow = 0;