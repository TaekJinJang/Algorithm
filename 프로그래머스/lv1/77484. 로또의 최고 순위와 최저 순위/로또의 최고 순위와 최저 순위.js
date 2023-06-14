function solution(lottos, win_nums) {
    let answer = [];
   let [match,zero] = [0,0]; 
    const rank = [6,6,5,4,3,2,1]
    lottos.forEach((lotto,i)=>{

        if(win_nums.includes(lotto)) {
            match ++;
        }
        zero += (lotto === 0) ? 1 : 0;
        
    });

    answer = [rank[match+zero],rank[match]]
    return answer;
}