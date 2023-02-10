function solution(n) {
    let result = [];
    let test = String(n).split("").reverse()
    console.log(test)
    let arr = String(n).split("").reverse().map((data) => Number(data))
    for(let i = 0; i < arr.length; i++) {
        result[i] = Number(arr[i])
    }
    return arr;
}