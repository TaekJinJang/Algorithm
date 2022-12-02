morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
// function solution(letter) {
//     let answer = '';
//     let currentMorse = '';
//     for(i=0;i<letter.length;i++) {
//         const item = letter[i];
//         if(item === ' ') {
//             answer += morse[currentMorse];
//             currentMorse = '';
//         } else {
//             currentMorse += item;
//         }
//     }
//     answer += morse[currentMorse]
//     return answer;
// }
function solution(letter) {
    let answer = '';
    let currentMorse = '';
    letter = letter.split(' ');
    for(i=0;i<letter.length;i++) {
            answer += morse[letter[i]]
    }    

    return answer;
}