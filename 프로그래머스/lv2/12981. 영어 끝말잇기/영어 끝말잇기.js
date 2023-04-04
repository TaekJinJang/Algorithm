function solution(n, words) {
    var answer = [0,0];
    let temp = [];
    
    for(let i=0;i<words.length;i++){
        if(temp.length == 0){ 
            // 길이가 0이 아닐때 끝 스펠링과 첫 스펠링이 맞는지
            temp.push(words[i])
            continue;
        }
        if(words[i].length < 2) {
            let number = i % n + 1;
            let repeat = Math.ceil((i + 1) / n);
            answer = [number,repeat]
            return answer
        }
        if(temp[temp.length-1].slice(-1) !== words[i].slice(0,1)){
            // n % i 해서 나머지값이 순서
            let number = i % n + 1;
            let repeat = Math.ceil((i + 1) / n);
            answer = [number,repeat]
            return answer
        }

        if(temp.includes(words[i]) === true){

            let number = i % n + 1;
            let repeat = Math.ceil((i + 1) / n);
            answer = [number,repeat]
            return answer
            } 
        temp.push(words[i])
    }

    return answer;
}

// 단어의 마지막글자를 따서 끝말잇기
// 중복이거나, 단어의 스펠링이 틀리면 탈락
// 탈락한 사람의 번호와 탈락순서를 리턴

// 마지막글자와 맞는지 if문으로 확인하고
// 배열안에 지금껏 단어들을 추가해논뒤 배열에 다음단어가 있는지 확인
// 단어가 있다면 단어 순서와 그 순서를 n으로 나눈값..? 리턴