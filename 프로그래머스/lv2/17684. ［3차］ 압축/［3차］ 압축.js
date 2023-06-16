function solution(msg) {
    let answer = [];
    let alpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let passIdx = 0;

    
    for(let i=0;i<msg.length;i++){
        let distIdx = 0;
        //console.log(i,passIdx)
        if(i <= passIdx - 2) continue;

        for(let j=i+1;j<=msg.length;j++){
            const item = msg.substring(i,j)
            if(alpha.includes(item)) {
                distIdx = alpha.indexOf(item) + 1
                if(j === msg.length) {
                    answer.push(distIdx)
                    passIdx = 9999
                }
            }
            else {
                answer.push(distIdx);
                alpha.push(item)
                passIdx = j

                //console.log(item,alpha.length)
                break;
            }
        }
    }

    return answer;
}