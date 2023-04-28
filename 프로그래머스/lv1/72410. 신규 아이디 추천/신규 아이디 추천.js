function solution(new_id) {
    let answer = new_id.toLowerCase() // 1
    .replace(/[^a-z0-9-_.]/gi, '') // 2
    .replace(/[.]{2,}/gi, '.') // 3
    .replace(/^[.]|[.]$/gi,''); // 4
    
    if(answer === "") answer = "a"; // 5
    if(answer.length > 15) {
        answer = answer.substring(0, 15);
        answer = answer.replace(/[.]$/gi,'');
  }
    while(answer.length < 3){
    answer += answer[answer.length-1];
  }
    return answer;
}