function solution(msg) {
    var answer = [];
    const temp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let afterNumber = 27;
    
    let map = temp.split('').reduce((acc,v,i) => {
        acc.set(v,i+1)
        return acc
    },new Map())
    
    const lastWord = msg.split('').reduce((acc,cur) => {
        let nextWord = acc+cur;
        if(!map.has(nextWord)) {
            map.set(nextWord,afterNumber++);
            answer.push(map.get(acc))
            return cur
        }
        return nextWord
    })
    answer.push(map.get(lastWord))

    return answer;
}