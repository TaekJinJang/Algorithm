const keypad = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2],
    '*':[3,0],0:[3,1],'#':[3,2]
}

const distance = ([x,y],[posX,posY]) => {
    return Math.abs(posX-x) + Math.abs(posY-y);
}


function solution(numbers, hand) {
    let handLocation = {'L' : keypad['*'], 'R':keypad['#']}
    const distHand = (hand === 'left') ? 'L' : 'R'
    var answer = '';
    
    const handArray = numbers.map((num) => {
        const pos = keypad[num];
        if(pos[1] === 0) {
            handLocation['L'] = pos
            return 'L'
        }
        if(pos[1] === 2) {
            handLocation['R'] = pos;
            return 'R';
        }
        if(distance(handLocation['L'],pos) > distance(handLocation['R'],pos)) {
            handLocation['R'] = pos;
            return 'R'
        }
        if(distance(handLocation['L'],pos) < distance(handLocation['R'],pos)) {
            handLocation['L'] = pos;
            return 'L'
        }
        handLocation[distHand] = pos
        return distHand
        
    }).join('')
    
    return handArray;
}
