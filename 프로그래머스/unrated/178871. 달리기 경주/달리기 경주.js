function solution(players, callings) {
    const hash = new Map();
    
    players.forEach((name, index) => {
        hash.set(name, index);
    })
    
    callings.forEach(name => {
        const curIdx = hash.get(name);
        const front = players[curIdx - 1];

        [players[curIdx], players[curIdx -1]] = [players[curIdx -1], players[curIdx]];
        
        hash.set(name, hash.get(name) - 1);
        hash.set(front, hash.get(name) + 1);
    })
    
    return players;
}