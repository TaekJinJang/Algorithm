function solution(cacheSize, cities) {
    // 3: 05
    // 캐시 안에 도시 이름이 있다면 hit
    // hit면 indexOf로 찾아서 삭제 후 다시 push
    // 없으면 shift 후 새로운거 push
    let answer = 0;
    let cache = [];
    cities.forEach(city=>{
        city = city.toUpperCase();
        if(cache.includes(city)) {
            answer ++;
            const idx = cache.indexOf(city)
            cache.splice(idx,1)
            cache.push(city)
        } else {
            if(cache.length === cacheSize) cache.shift();
            answer += 5;
            if(cacheSize > 0) cache.push(city)
        }
            
    } )
    
    
    

    return answer;
}