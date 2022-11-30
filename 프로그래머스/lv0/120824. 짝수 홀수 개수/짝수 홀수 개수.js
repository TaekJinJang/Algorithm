function solution(num_list) {
    var answer = [];
    let cnt = num_list.length
    let one = 0;
    let two = 0;
    for(i=0;i<cnt;i++){
        if(num_list[i] % 2 === 1){
            one++;
        } else {
            two++;
        }
    }
    answer.push(two,one)
    
    return answer;
}