function solution(numbers) {
    var answer = new Set()
    let n = numbers.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n;j++){
            if(i !==j) answer.add(numbers[i]+numbers[j])
            
        }
    }
    answer = [...answer].sort((a,b)=>a-b)
    return answer;
}