function solution(cacheSize, cities) {
    
    let answer = 0;
    const cache = []
    
    if(cacheSize === 0) return cities.length*5
    
    for(let i=0;i<cities.length;i++){
        const item = cities[i].toLowerCase()
        answer += cache.includes(item) ? 1 : 5
        if(cache.length < cacheSize) {
            cache.push(item)

            continue;
        }
        if(cache.includes(item)) {
            cache.splice(cache.indexOf(item),1)
            cache.push(item)

        } else {
            cache.shift()
            cache.push(item)

        }
    }

    return answer;
}