function solution(arr1, arr2) {
    var answer = [];
    let n = arr1.length
    let temp = 0
    
    for(let i=0;i<n;i++){
        temp = 0
        let temp2 = []

        for(let j=0;j<arr1[0].length;j++){
        temp = Number(arr1[i][j]) + Number(arr2[i][j])
        temp2.push(temp)
        }   
        answer.push(temp2)
        
        }



    
    return answer;

}
// 2차원 배열을 그냥 더해주면 됌