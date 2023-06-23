function solution(orders, course) {
    var answer = [];
    let obj = {};
    course.forEach((num) => {
        orders.forEach((menu) => {
          combination(menu.split(""), num).forEach((el) => {
            const word = el.sort().join("");
              obj[word] = (obj[word] || 0) + 1
          });
        });
  });
    const keyArr = Object.keys(obj);
    course.forEach(ele=>{
        const word = keyArr.filter(v=>v.length === ele);
        let count = 0;
        word.forEach(w=>count = Math.max(obj[w],count));
        const temp = word.filter(v=>obj[v] == count && obj[v] > 1)
        answer.push(...temp)
    })
    
    return answer.sort();
}

function combination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fix, idx, array) => {
    const restArray = array.slice(idx + 1);
    const combiArr = combination(restArray, num - 1);
    const combiFix = combiArr.map((el) => [fix, ...el]);

    result.push(...combiFix);
  });

  return result;
}
/*

손님들이 주문한 모든 단품 조합을 완전탐색으로 배열에 집어넣음
배열.reduce로 new Map에 집어넣음 갯수 세기
course을 반복하면서 문자열 갯수에 맞춰 구함
단품 조합에 따라 2,3,4개의 메뉴별 세트를 구함
*/