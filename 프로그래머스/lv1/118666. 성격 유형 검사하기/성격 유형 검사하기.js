function solution(survey, choices) {
    var answer = '';
    const score = {
        'R' : 0, 'T' : 0,
        'C' : 0, 'F' : 0,
        'J' : 0, 'M' : 0,
        'A' : 0, 'N' : 0
    }
    
    choices.forEach((choice,i) => {
        let [agree,disAgree] = survey[i]

        score[choice<4 ? agree : disAgree] += Math.abs(choice - 4)
        
    })
    const type = Object.keys(score);
    for(let i=0; i<type.length;i+=2) {
        const [left,right] = [score[type[i]], score[type[i+1]] ]
        answer += (left >= right ? type[i] : type[i+1]);
    }

    return answer;
}