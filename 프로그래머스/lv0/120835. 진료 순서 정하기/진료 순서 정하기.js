function solution(emergency) {
    var newEmergencyArr = [];
    
    for(i=0;i<emergency.length;i++){

        newEmergencyArr.push({value:emergency[i], idx:i})

    }

    newEmergencyArr.sort((a,b) => b.value-a.value)
    var answer = new Array(emergency.length)
    
    for(i=0;i<newEmergencyArr.length;i++){
        const item = newEmergencyArr[i];
        answer[item.idx] = i + 1 
    }
    
    return answer;
}6