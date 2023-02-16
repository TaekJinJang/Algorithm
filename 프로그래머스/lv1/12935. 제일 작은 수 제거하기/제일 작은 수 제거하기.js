function solution(arr) {
    let arr1 = Math.min(...arr)
    console.log(arr1)
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === arr1) {
            arr.splice(i,1)
        }
    }
    if(arr.length===0) arr.push(-1)
    return arr
}