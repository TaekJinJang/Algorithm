function solution(name) {
    let [upDown,leftRight] = [0,name.length - 1];
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    [...name].forEach((c, i) => {
        const x = alpha.indexOf(c);
        upDown += Math.min(x, alpha.length - x);

        let j = i + 1;
        while (j < name.length && name[j] === 'A') {
            j++;
        }

        leftRight = Math.min(
            leftRight,
            (i * 2) + (name.length - j),
            i + (2 * (name.length - j)),
        );
    });
    
    return upDown + leftRight;
}