function solution(hp) {
    let cnt = 0;
    let arr = [5,3,1];
    // if(hp >= 5) {

    // }
    
    for(i=0;i<arr.length;i++) {
         let item = arr[i]
        cnt += Math.floor(hp/item);
        hp -=Math.floor(hp/item) *item;
    }




    return cnt;
}