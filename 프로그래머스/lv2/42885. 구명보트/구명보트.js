function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b)
    
    while(people.length !== 0) {
        if(people[0] + people[people.length-1] <= limit) {
            answer ++
            people.shift()
            people.pop()
        } else{
            answer++
            people.pop()
        }
    }
    // 80 70 50 50
    // 70 50 50
    // 50 50 == 100
    
    return answer;
}