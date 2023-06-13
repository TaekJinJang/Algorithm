function solution(clothes) {
    const clothesMap = new Map();
    let answer = 1
    
    clothes.forEach(cloth=>{
        const type = cloth[1];
        clothesMap.set(type,(clothesMap.get(type) || 0) + 1)
    })
    for(const [key,value] of clothesMap) {
        answer *= (clothesMap.get(key) + 1);
    }
    
    return answer - 1;
}