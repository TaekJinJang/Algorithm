const keypad = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2],
    '*':[3,0],0:[3,1],'#':[3,2]
}

const distance = ([x,y],[posX,posY]) => {
    return Math.abs(posX-x) + Math.abs(posY-y)
}

function solution(numbers, hand) {
    var answer = '';
    const distHand = (hand === 'left') ? 'L' : 'R'
    let thumbs = {'L':keypad['*'],'R':keypad['#']}

    const num = numbers.map((n)=>{
        const pos = keypad[n]
        if(pos[1]===0) {thumbs.L = pos; return 'L'}
        if(pos[1]===2) {thumbs.R = pos; return 'R'}
        
        const Ldistance = distance(thumbs.L,pos)
        const Rdistance = distance(thumbs.R,pos)
        
        if(Ldistance > Rdistance) { thumbs.R = pos; return 'R'}
        if(Ldistance < Rdistance) { thumbs.L = pos; return 'L'}
        
        thumbs[distHand] = pos
        return distHand
        
    }).join('')
    return num;
}
