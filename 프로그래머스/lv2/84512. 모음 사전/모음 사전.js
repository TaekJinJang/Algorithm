function solution(word) {
    const answer = [];
    const str = "";
    for(let i=1;i<=5;i++) dfs(str,i,answer);
    return answer.sort().indexOf(word) + 1
    
}



const dfs = (str, i,answer) => {
    const vowels = [..."AEIOU"] // ['A','E','I','O','U']
    if(i === str.length) {
        answer.push(str)
        return;
    }
    
    vowels.forEach((v) => {
        dfs(str+v,i,answer)
    })
    
}