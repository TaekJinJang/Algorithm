function solution(array, commands) {
    var answer = [];
    
    commands.forEach(command=>{
        let [i,j,k] = command;
        let distArr = [...array].splice(i-1,j-i+1).sort((a,b)=>a-b);
        answer.push(distArr[k-1])
    })
    
    return answer;
}