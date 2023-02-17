function solution(s) {
    var answer = true;
    let tmp = s.replace(/[^0-9]/gi,"")
    let str = s.length === tmp.length ? true : false
    answer = str && s.length === 4 || s.length === 6 && str ? true : false
    return answer;
}