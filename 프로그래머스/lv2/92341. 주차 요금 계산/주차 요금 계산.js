function solution(fees, records) {
    
    const getTime = (startTime,endTime) => {
        const [endHour,endMinute] = endTime.split(":");
        const [startHour,startMinute] = startTime.split(":");
        return (endHour-startHour) * 60 + (endMinute-startMinute);
    }
    
    const [basicTime,basicFee,addMinute,addFee] = fees
    let recordMap = new Map();
    let numMap = new Map();
    let answer = [];
    
    records.forEach((record)=>{
        const [time,num,type] = record.split(" ");
        
        
        if(type === 'IN') {
            recordMap.set(num,time);
            
        } else {
            if(numMap.has(num)) numMap.set(num,getTime(recordMap.get(num),time)+numMap.get(num))
            else numMap.set(num,getTime(recordMap.get(num),time))
            recordMap.delete(num)
        }
    })
    
    
    recordMap.forEach((value,key)=>{
        if(numMap.has(key)) numMap.set(key,numMap.get(key)+getTime(value,'23:59'))
        else numMap.set(key,getTime(value,'23:59'))
    })
    
    numMap.forEach((value,key)=>{
 
        if(basicTime >= value) answer.push([key,basicFee])
        else {
            let overTime = value-basicTime;
            answer.push([key,basicFee + Math.ceil(overTime/addMinute) * addFee])
        }
    })

    
    return answer.sort().map((a)=>a[1])
}