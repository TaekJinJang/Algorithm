function solution(want, number, discount) {
    let answer = 0;
    const isMatch = (arr) => {
        let temp = 0
        for(let i=0;i <want.length;i++) {
            let buyItem = arr.filter((item)=>item === want[i])
            if(buyItem.length === number[i]) temp ++
        }
        return temp
    }
    for(let i=0; i<=discount.length-10 ;i++){
        let item = discount.slice(i,i+10)
        if(isMatch(item) === want.length) answer++
    }

    
    return answer;
}

