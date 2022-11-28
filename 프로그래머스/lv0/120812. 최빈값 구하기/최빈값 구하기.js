function solution(array) {
    let soltedArray = array.sort((a,b)=>a-b)
    let num = -1 // 최빈값
    let choiNum = 0; // 최빈값이 될때 몇번 반복해서 된건지
    let repeatNum = 0; // 똑같은숫자 몇번 반복
    let beforeNum = 0; // 지금보고있는 숫자 이전 숫자
    let isDupNum = false;
    for(i=0;i<array.length;i++){
        if(beforeNum !== array[i]) {
            repeatNum =1;
        } else {
            repeatNum ++
        }
        if (repeatNum === choiNum && num !== array[i]) {
         isDupNum = true;
        }   
        if(repeatNum > choiNum) {
            num = array[i];
            choiNum = repeatNum;
            isDupNum = false;
        }
        beforeNum = array[i];
    }
    if(isDupNum) return -1
    return num
}

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 2. 최빈값을 그때그때 기록한다.