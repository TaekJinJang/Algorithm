function solution(today, terms, privacies) {
    var answer = [];
    const [todayYear,todayMonth,todayDay] = today.split('.').map((t)=>Number(t))
    const todayDate = (todayYear*12*28) + (todayMonth*28) + todayDay
    const term = terms.reduce((acc,cur) => {
        const [type,period] = cur.split(' ')
        acc[type] = parseInt(period)
        return acc
    },{})

    privacies.forEach((p,i) => {
        let [expireDate,type] = p.split(' ')
        let [year, month, day] = expireDate.split('.').map((e)=>Number(e))
        
        const period = term[type]
        const date = (year*12*28) + ((month+period)*28) + day
        if(todayDate >= date ) answer.push(i+1)
        
    })

    
    
    return answer;
}

