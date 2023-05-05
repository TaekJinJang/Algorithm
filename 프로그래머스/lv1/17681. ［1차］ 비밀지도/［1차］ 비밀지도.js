function solution(n, arr1, arr2) {
    var answer = [];
    let temp = []
    let a = arr1.map((num)=>num.toString(2).padStart(n,0))
    let b = arr2.map((num)=>num.toString(2).padStart(n,0))
    for(let i=0;i<n;i++){
        temp.push(String(+a[i] + +b[i]).padStart(n,0))
    }
    for(let x of temp) {
        let temp = x.split('')
        answer.push(temp.map((item)=>item =="0"?" ":"#").join(''))
    }
    return answer;
}