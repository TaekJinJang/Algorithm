function solution(w, h) {
    let arr = [h];
    for (let i = 1; i <= w; i++) {
        let y = h - (h * i) / w;
        arr.push(y);
    }

    let sum = 0;

    for (let i = 0; i < w; i++) {
        let prev = Math.ceil(arr[i]);
        let next = Math.floor(arr[i + 1]);
        let dif = prev - next;
        sum += dif;
    }

    return w * h - sum;
}