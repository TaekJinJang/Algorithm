const getMinute = (time) => {
    const [hour,minute] = time.split(":").map(Number);
    return (hour*60) + minute;
}
const getTime = (sumMinute) => {
    const [hour,minute] = [String(Math.floor(sumMinute / 60)) , String(sumMinute % 60)]
    return hour.padStart(2,0) + ":" + minute.padStart(2,0)
}

function solution(n, t, m, timetable) {
    var answer = '';
    let minuteTable = timetable.map((time)=> getMinute(time)).sort((a,b)=>a-b)

    
    const fristBus = getMinute("09:00")
    let cnt = 0;
    for(let i=0;i<n;i++){
        const busTime = fristBus + (i*t);
        const rideCrew = [];
        // minuteTable을 순회하면서 busTime과 같거나 작은 수를 m만큼 가져옴
        for(const crew of minuteTable) {
            if(rideCrew.length === m) break;
            if(busTime >= crew) {
                rideCrew.push(crew)
            }
        }
        
        // let sliceCrew = minuteTable.slice(0,m)
        // cnt += m

        
        if( i === n-1) {
            if(rideCrew.length < m) {
                answer = getTime(busTime);
                return answer;
            }
            else return getTime(rideCrew.at(-1) - 1)
            
        }
    minuteTable = minuteTable.slice(rideCrew.length)
        
    }
    

    return answer;
}