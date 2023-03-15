function solution(s){
    var answer = true;
    let a=0
    
    /*let rt = s.split('').filter(v=>'('.includes(v))
    let lt = s.split('').filter(v=>')'.includes(v))
    
    return rt.length === lt.length*/
    
    for(let i=0;i<s.length;i++){
        if(s[i] =='(') a++; 
        else a--; 
        if(a < 0) return false
    }
    
    return a==0 
}