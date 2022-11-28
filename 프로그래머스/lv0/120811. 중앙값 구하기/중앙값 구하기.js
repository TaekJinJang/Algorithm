function solution(array) {

    let newArray = []

    for (i=0;i<array.length;i++) {
        let minNumber = 1000 // 배열에 들어갈 원소중 가장 큰 수
        for (j=0;j<array.length;j++) {
            if (minNumber > array[j]) {
                minNumber = array[j]
            }
        }
    newArray.push(minNumber)
    for (cnt=0;cnt<array.length;cnt++) {
        if(minNumber === array[cnt]) {
            array[cnt] = 1000;
            break;
        }    
    }
    }
    console.log("new Array: ", newArray)
    console.log(newArray[Math.floor(array.length/2)])
    return newArray[Math.floor(array.length/2)]
}

// 1. 정렬
// 1-1. 배열 중 가장 작은 값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값을 지운다.
// 1-4. 만약 원래 배열 길이만큼 반복했으면 끝내고 아니면 1-1로 돌아간다.
// 2. 가운데 값 꺼내기