function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0)
    let user = [];
    let reportList={} // 신고자와 신고당한 자 Object
    
    let set = new Set() // 중복 방지하기 위해
    for(let x of report) {
        set.add(x)
    }
    
    id_list.map((id)=>reportList[id] = [])
    
    for(let x of set) {
        let reportArr = x.split(" ");
        reportList[reportArr[1]].push(reportArr[0])
    }
    
    for(let x in reportList) {
        if(reportList[x].length >= k) {
            reportList[x].map((user) => {
                answer[id_list.indexOf(user)] +=1
            })
        }
    }
    
    return answer;
}