function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.splice(num1,num2-num1+1)
    return answer;
}