function solution(files) {
  const pattern = /(\D+)(\d{1,5})/;
    console.log(files[0].match(pattern))
  return files.sort((a, b) => {
    let [aHead, aNumber] = a.match(pattern).slice(1, 3);
    let [bHead, bNumber] = b.match(pattern).slice(1, 3);
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();
    if (aHead === bHead && aNumber === bNumber) return 0;
    if (aHead === bHead) return aNumber - bNumber;
    if (aHead > bHead) return 1;
    else return -1;
  });
}

// 대문자로 변경 후 숫자 전까지 자름
// 조건에 맞춰서 sort 
// 이후 숫자만 잘라서 조건에 맞춰서 sort
// 둘다 같다면 냅두기

//1~2 조건 배열을 만들고 3~4 조건 배열을 만들어서 indexOf 같은걸로 같은걸 찾기