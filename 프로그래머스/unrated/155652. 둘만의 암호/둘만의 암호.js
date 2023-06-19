function solution(s, skip, index) {
    let answer = '';
    const code = [...'abcdefghijklmnopqrstuvwxyz'].filter((c)=>!skip.includes(c));
    [...s].forEach((str)=>{
        answer += code[(code.indexOf(str)+index)%code.length]
    })
    return answer;
}