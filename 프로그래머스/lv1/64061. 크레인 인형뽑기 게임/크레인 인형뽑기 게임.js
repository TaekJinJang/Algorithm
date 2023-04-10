function solution(board, moves) {
    var answer = 0;
    let item = 0
    let stack = []
    
    for(let i=0;i<moves.length;i++){
        let box = moves[i]-1    
        
        for(let j=0;j<board.length;j++){
            const doll = Number(board[j].slice(box,box+1))
            // doll 을 board[j][box] 로 바꿀 수 있음
            if(doll !== 0)  {
                stack.push(doll)
                board[j].splice(box,1,0)
                // board[j][box] = 0 으로 바꿀 수 있음
                
                if(stack[stack.length-1] === stack[stack.length-2]) {
                    stack.splice(stack.length-2,2)
                    answer +=2
                }
                
                break;
            }
 
        }
    }
    return answer;
}
// 2중for문으로 배열안에 moves(i) 값이 있다면 빼서 바구니 넣음 
// 둘이 같다면 ? 둘다 pop  result++
