function solution(lottos, win_nums) {
    var answer = [];
    let num = 7
    let zero = 0
    lottos.sort()
    win_nums.sort()
    for(let i=0;i<lottos.length;i++){
        if(lottos[i] === 0) zero ++
        for (let j=0;j<lottos.length;j++){
            if(lottos[i] === win_nums[j]) {
            num--
            }
        }
    }
    if( num == 7) num = 6
    if(num == 0) num= 1
    if(zero == 6) {
        return [1,6]
    }
    answer.push(num-zero)
    answer.push(num)
    return answer;
}