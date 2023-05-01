const getSliceArr = (str) => {
    const SliceArr = [] ;
    let regEx = /^[a-zA-Z]+$/;
    for(let i=0;i<str.length; i++){
        let sliceStr = str.toLowerCase().slice(i-1,i+1)
        
        if (regEx.test(sliceStr)){
            SliceArr.push(sliceStr)
        }
    }
    return SliceArr
}

function solution(str1, str2) {
    var answer = 0;
    const arr1 = getSliceArr(str1)
    const arr2 = getSliceArr(str2)
    
    let union = [] // 합집합
    let intersect = [] // 교집합

    for(let i=0;i<arr1.length;i++){
        const index = arr2.indexOf(arr1[i])
        
        if(index >= 0) {
            intersect.push(...arr2.splice(index,1))
        } 
        union.push(arr1[i])
        
    }
    union.push(...arr2)
    
    if(union.length === 0) {
        return 65536;
    }
    answer = Math.floor((intersect.length / union.length) * 65536)
    
    return answer;
}

/*
str1,2 를 영문자만 남기도록 정규표현식을 쓰고
for문으로 두개씩 묶어준다 (배열)
그 뒤 서로 같은게 있는지 확인 ? 

*/