function solution(nums) {
    var answer = 0;
    let map = new Map()
    
    for(let i=0;i<nums.length;i++){
        let item = nums[i]
        if(map.has(item)) {
            
        } else{
            map.set(item,1)
        }
        
    }
    return Math.min(map.size,nums.length/2);
}

// new Map 으로 객체에 갯수를 저장해놓음
// 총 map의 갯수