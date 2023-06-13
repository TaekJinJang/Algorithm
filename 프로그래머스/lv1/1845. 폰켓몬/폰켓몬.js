function solution(nums) {
    var answer = 0;

    let map = new Map();
    
    nums.forEach(num=>{
        if(!map.has(num)) {
            map.set(num)
        }
    })
    
        return Math.min(map.size,nums.length/2);

    
}

// new Map 으로 객체에 갯수를 저장해놓음
// 총 map의 갯수