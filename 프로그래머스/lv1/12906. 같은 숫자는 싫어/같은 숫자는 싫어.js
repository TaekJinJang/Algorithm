

function solution(arr)
{
    const stack = [];
    let answer = [];
    arr.forEach((num=>{
        if(stack[stack.length-1] !== num) {
            stack.push(num);
            answer.push(num)
        } 
        
    }))
    return answer;

}