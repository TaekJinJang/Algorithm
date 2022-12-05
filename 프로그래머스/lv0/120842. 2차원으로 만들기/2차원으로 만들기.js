function solution(num_list, n) {
    var answer = [];
    let arr = []
    for (i=0;i<num_list.length;i++) {
        const item = num_list[i];
        arr.push(item) 
        if(arr.length === n ) {
            answer.push(arr)
            arr = []
        } 

    }
    return answer;
}