function solution(progresses, speeds) {
    let answer = [];
    let day = []
    
    for(let i=0;i<progresses.length;i++){
        const item = progresses[i]
        
        const progress = 100 - item;
        const speed = Math.ceil(progress/speeds[i]);

        if(day[0] >= speed || day.length === 0) {
            day.push(speed);

        } else {
            answer.push(day.length)
            day = [speed];
        }
        
    }


    answer.push(day.length)
    return answer;
}