function solution(s) {
    let temp = s.toLowerCase().split(" ")
    let length = temp.length
    for(let i=0;i<length;i++){
        let firstWord = temp[i].slice(0,1)
        if(isNaN(firstWord) === false) {
        } else{
            temp[i] = temp[i].replace(firstWord,firstWord.toUpperCase())
        }
    }
    return temp.join(' ');
}