function solution(dartResult) {
    // * 해당, 직전 점수 2배, 중첩가능
    // # 해당점수는 마이너스
    let answer = 0;
    let score = [0, 0, 0]
    let bonus = [1, 1, 1]
    let option = [1, 1, 1]
    let roundScore = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        // 숫자 거르기
        score[i] = parseInt(dartResult)
        dartResult = dartResult.slice(String(score[i]).length)
        
        // 보너스 거르기
        if (dartResult[0] == 'S' || dartResult[0] == 'D' || dartResult[0] == 'T') {
            switch (dartResult[0]) {
                case 'S':
                    bonus[i] = 1; break;
                case 'D':
                    bonus[i] = 2; break;
                case 'T':
                    bonus[i] = 3; break;
            }
            dartResult = dartResult.slice(1)
        }

        // 옵션 거르기
        if (dartResult[0] == '*' || dartResult[0] == '#') {
            switch (dartResult[0]) {
                case '*':
                    option[i] = 2; break;
                case '#':
                    option[i] = -1; break;
            }
            dartResult = dartResult.slice(1)
        }
    }

    // 보너스 및 옵션 반영 점수 계산
    for (let i = 0; i < 3; i++) {
        roundScore[i] = score[i] ** bonus[i];
        roundScore[i] = roundScore[i] * option[i];
        if (i > 0 && option[i] == 2) {
            roundScore[i - 1] = roundScore[i - 1] * option[i];
        }
    }

    // 점수 최종 합산
    answer = roundScore.reduce((acc, score) => { return acc + score }, 0)
    return answer;
}