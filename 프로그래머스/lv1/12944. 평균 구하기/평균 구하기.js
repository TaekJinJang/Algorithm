function solution(arr) {
    let arrSum = arr.reduce((a,b)=>a+b,0)
    
    return arrSum/arr.length
}