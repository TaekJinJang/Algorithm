function solution(N, stages) {
    let arr = [];

    let failUsers = 0;
    for(let i=1;i<=N;i++){
        const failUser = stages.filter(stage=>stage === i).length
        
        let failRate = (failUser === 0) ? 0 : failUser / (stages.length - failUsers)
        failUsers += failUser;
        arr.push([failRate,i])
    }
    
    arr.sort((a,b)=>{
        return b[0] - a[0];
    })
    
    
    return arr.map(([rate,idx])=>idx);
}