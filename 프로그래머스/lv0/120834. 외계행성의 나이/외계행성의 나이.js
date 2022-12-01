function solution(age) {
    var answer = '';
    
    const strAge = String(age);
    
    for (i=0;i<strAge.length;i++) {
        answer += String.fromCharCode(strAge[i].charCodeAt(0)+49)
    }
    
    return answer;
}

// 숫자를 문자로 변환해서 문제풀이