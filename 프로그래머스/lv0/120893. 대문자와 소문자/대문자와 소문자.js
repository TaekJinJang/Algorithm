function solution(my_string) {
    var answer = '';
    for(i=0;i<my_string.length;i++){
        let item = my_string.charCodeAt(i)
        if(item<97) {
            item = item + 32
        } else {
            item = item - 32
        }
        answer += String.fromCharCode(item)
        // console.log(item)
    }
    return answer;
}