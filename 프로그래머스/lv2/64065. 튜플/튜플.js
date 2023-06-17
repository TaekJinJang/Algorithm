function solution(s) {
    var answer = [];
    let distArr = [];
    let arr = s.slice(2,-2).split("},{").sort((a,b)=>a.length-b.length)
    arr.forEach(str=>{
        distArr.push(str.split(',').map(Number))
    })
    
    distArr.forEach(arr=>{
        arr.forEach(num=>{
            if(!answer.includes(num)) answer.push(num)
            
        })
    })
    return answer;
}