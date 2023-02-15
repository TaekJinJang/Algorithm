function solution(phone_number) {

    let str = phone_number.substr(-4)

    return phone_number.slice(0,-4).replace(/[0-9]/gi,'*') + str;
}