function solution(s){
    var answer = true;
    let a=0
    let b=0
    for(let i=0;i<s.length;i++){
        const item = s[i]
        if(item ==="p" || item === "P") {
            a+=1
        }
        if (item ==="y" || item ==="Y") {
            b+=1
        }
        console.log(a,b)
        if (a===b) {
            answer = true;
        } else{answer = false}
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}