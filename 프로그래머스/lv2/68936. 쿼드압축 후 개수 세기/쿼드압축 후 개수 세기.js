function solution(arr) {
    let answer = [0,0];
    const divide = (row, col, n) => { // 시작행, 시작열, 비교할 길이
        let flag = true;
        for(let x = row; x<row+n; x++) {
            for(let y = col; y<col+n;y++) {
                if(arr[row][col] !== arr[x][y])
                    flag = false
            }
        };
        if(!flag) {
            const half = parseInt(n/2);
            divide(row, col, half);
            divide(row, col+half, half);
            divide(row+half, col, half);
            divide(row+half, col+half, half)
        } else{
            if(arr[row][col]) answer[1] ++
            else answer[0] ++
        }
        
    }
    divide(0,0,arr.length)
    return answer;
}