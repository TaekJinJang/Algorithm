function solution(n, words) {
    var answer = [0,0];
    const stack = [];
    for(let i=0;i<words.length;i++){
        const item = words[i]
        if(stack.length === 0) {
            stack.push(item);
            continue;
        }
        if(stack[stack.length-1].slice(-1) !== item.slice(0,1) || stack.includes(item) === true ) {
            let round = Math.ceil((i + 1)/ n)
            let number = i % n + 1
            answer = [number,round]
            return answer
        }
        stack.push(item)
        
    }

    return answer;
}

// 단어의 마지막글자를 따서 끝말잇기
// 중복이거나, 단어의 스펠링이 틀리면 탈락
// 탈락한 사람의 번호와 탈락순서를 리턴

// 마지막글자와 맞는지 if문으로 확인하고
// 배열안에 지금껏 단어들을 추가해논뒤 배열에 다음단어가 있는지 확인
// 단어가 있다면 단어 순서와 그 순서를 n으로 나눈값..? 리턴