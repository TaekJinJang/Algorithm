const isRight = (str) => {
    let cnt = 0;
    [...str].forEach((s) => {
        if(cnt <0) return false
        s === '(' ? cnt ++ : cnt --
    })
    
    return cnt === 0 ? true : false
}

function solution(p) {
    let answer = '';
    if(!p) return p
    let cnt = 0;
    let [u,v] = ['',''];
    
    for(let i=0;i<p.length;i++){
        
        const item = p[i];
        item === '(' ? cnt ++ : cnt --;
        if(cnt === 0) {  
          u = p.slice(0,i+1);
          v = p.slice(i+1);
          break;
        } 
    }
    
    if(isRight(u)) {
        return u+solution(v)
    }
    
     return `(${solution(v)})${[...u.slice(1,-1)].map(x => x === '(' ? ')' : '(').join('')}`
}