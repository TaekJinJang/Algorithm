function solution(topping) {
    var answer = 0;
    const [aTopping, bTopping] = [new Map(), new Set()];
    
    topping.forEach((num) => {
        aTopping.set(num,(aTopping.get(num) || 0) +1)
    })
    
    topping.forEach((num)=> {
        bTopping.add(num)
        aTopping.set(num,aTopping.get(num)-1)
        
        if(aTopping.get(num)===0) aTopping.delete(num)
        
        if(aTopping.size === bTopping.size) answer++
        
    })

    return answer;
}



// 객체를 쓰징낳고 배열로 풀 수 있을 것 같음 배열 길이만 체크