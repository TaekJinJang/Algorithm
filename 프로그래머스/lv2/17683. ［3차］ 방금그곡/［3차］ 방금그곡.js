const convertCode = (score) => score
    .replaceAll(/C#/g, 'c')
    .replaceAll(/D#/g, 'd')
    .replaceAll(/F#/g, 'f')
    .replaceAll(/G#/g, 'g')
    .replaceAll(/A#/g, 'a');

const getTime = (start, end) => {
    const [h1, m1] = start.split(':').map(Number);
    const [h2, m2] = end.split(':').map(Number);
    return (h2 * 60 + m2) - (h1 * 60 + m1);
}

const playMusic = (time, score) => {
    let music = score;
    while (music.length <= time) {
        music += score;
    }
    return music.slice(0, time);
};

function solution(m, musicinfos) {
    const melody = convertCode(m);
    
    const musicList = musicinfos.reduce((acc, cur) => {
        const [start, end, title, _score] = cur.split(',');
        const playTime = getTime(start, end);
        const score = convertCode(_score);
        const music = playMusic(playTime, score);
        if (music.includes(melody)) acc.push({
            title: title,
            playTime: playTime,
        });
        return acc;
    }, [])

    musicList.sort((a, b) => b.playTime - a.playTime);
    const answer = musicList[0]?.title ?? '(None)';
    return answer;
}