function solution(record) {
    var answer = []

    let data = {}
    for(let i=0;i <record.length;i++){
        let message = record[i].split(' ')
        if(message[0] === 'Enter' || message[0] === 'Change') {
            data[message[1]] = message[2]
        }
    }
    for(let i=0;i<record.length;i++){
        let message = record[i].split(' ')
        if(message[0] === 'Enter') {
            answer.push(`${data[message[1]]}님이 들어왔습니다.`)
        }
        if(message[0] === 'Leave') {
            answer.push(`${data[message[1]]}님이 나갔습니다.`)
        }
    }
    return answer;
    
}

// for문으로 record.length 만큼 돌려서
// split('') 으로 나눠주고 두번째 꺼를 객체 key , 닉네임을 value, 첫번째꺼는 if문으로 판별