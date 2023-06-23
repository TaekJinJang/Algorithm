function solution(storey) {
    // 정답 변수
    let result = 0
    // 자릿수 별 분리
    const splitStorey = String(storey).split("").map(a => Number(a))
    // 자릿수 별 반복
    for(let i = splitStorey.length-1 ; i >= 0 ; i --) {
        if(splitStorey[i] > 5) {
            // 이번 자릿수가 0까지 올라가며 다음 자릿수에 +1
            result+= 10-splitStorey[i]
            // 마지막 자릿수라면 정답 배열에 +1
            if(i === 0) {
                result++
            }
            splitStorey[i-1]++
            // 이번 자릿수가 5이고 다음 자릿수도 5를 넘는다면 올림
        } else if(splitStorey[i] === 5 && i > 0 && splitStorey[i-1] >= 5) {
            result+= 5
            splitStorey[i-1]++    
        } else {
            // 이번 자릿수가 0이 될때까지 -1
            result+= splitStorey[i]
        } 
    }
    return result
}