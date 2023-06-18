
function solution(today, terms, privacies) {
    const dateCalc = ([y,m,d]) => {
        const [todayY,todayM,todayD] = today.split('.')
        const year = (todayY - y) * 12;
        const month = todayM-m;
        const day = (todayD - d < 0) ? -1 : 0;
        return year+month+day;
    }
    
    let answer = [];
    const period = terms.reduce((acc,cur)=>{ // 기간을 Object로 변경
        const [term,month] = cur.split(' ');
        acc[term] = Number(month)
        return acc
    },{}) 
    
    privacies.forEach((p,i)=> {
        const [date,term] = p.split(' ');
        const [year,month,day] = date.split('.');
        if(dateCalc([year,month,day]) >= period[term]) {
            answer.push(i+1)
        }
    })
    return answer;
}

