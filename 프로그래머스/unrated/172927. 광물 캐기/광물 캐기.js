function solution(picks, minerals) {
    let answer = 0;
    const picksSum = picks.reduce((a,b) => a+b,0)
    const slicedMinerals = minerals.slice(0, picksSum * 5);
    const countedMinerals = slicedMinerals.reduce((acc, cur, idx) => {
        const index = Math.floor(idx / 5);
        if (!acc[index]) acc[index] = [0, 0, 0];
        // 처음엔 빈배열이기때문에 0,0,0 을 지정해줌
        if (cur === 'diamond') acc[index][0]++;
        else if (cur === 'iron') acc[index][1]++;
        else if (cur === 'stone') acc[index][2]++;
        // console.log("acc:",acc,"cur:",cur,"idx",idx, "인덱스",index)
        return acc;
      }, []);
    
    // 이중배열 sort (1순위 : diamond가 더 많은 순 , 2순위 : iron이 더 많은 순)
    const sortedMinerals = countedMinerals.sort((a,b) => b[0] - a[0] || b[1] - a[1])
    
    console.log(sortedMinerals)
    
    for (const [dia, iron, stone] of sortedMinerals) {
    if (picks[0]) {
      answer += dia + iron + stone;
      picks[0]--;
    } else if (picks[1]) {
      answer += (dia * 5) + iron + stone;
      picks[1]--;
    } else if (picks[2]) {
      answer += (dia * 25) + (iron * 5) + stone;
      picks[2]--;
    }
  }
    
    return answer;
}