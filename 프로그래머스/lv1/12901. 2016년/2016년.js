function solution(a, b) {
    var answer = '';
    let monthDay = 0
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    for(let i=0;i<a-1;i++){
        monthDay +=month[i]

    }
    monthDay += b
    answer = day[monthDay%7]

    
    return answer;
}


// 윤년이라 2월은 29일
// 7일의 법칙? 