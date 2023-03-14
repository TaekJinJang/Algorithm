function solution(n) {
    var answer = 0;
    let temp = []
    for(let i=0;i<n;i++){
        if(i<=2) { 
            temp.push(i%1234567)
        } else temp.push((temp[i-1]+temp[i-2])%1234567)
    }
    
    return temp[n-1];
}