function solution(answers) {
    var answer = [];
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    let result = [0,0,0]
    answers.forEach((answer,i)=>{
        
        if(a[i%5] === answer) result[0]++;
        if(b[i%8] === answer) result[1]++;
        if(c[i%10] === answer) result[2]++;
    })
    
    const max = Math.max(...result)
    
    result.forEach((ele,i)=>{
        if(ele === max) answer.push(i+1)
    })
    return answer;
}