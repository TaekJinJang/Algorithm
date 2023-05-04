function solution(record) {
    let answer = []
    const user = {}
    const command = []; 
    for(let i=0;i <record.length;i++){
        
        const [cmd, id, nickname] = record[i].split(' ')
        
        if(nickname) user[id] = nickname
        if(cmd !== 'Change') {
            command.push([cmd,id])
        }
        
    }
    
    answer = command.map(([cmd,id]) => {
        return `${user[id]}님이 ${cmd === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    })


    return answer;
    
}