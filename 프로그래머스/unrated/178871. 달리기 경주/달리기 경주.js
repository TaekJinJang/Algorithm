function solution(players, callings) {
    const hash = new Map();
    
    players.forEach((player,i) => {
        hash.set(player,i);
    })
    
    callings.forEach(player => {
        const index = hash.get(player);
        const frontPlayer = players[index-1];
        
        [players[index],players[index-1]] = [players[index-1],players[index]];
        
        hash.set(player,hash.get(player) - 1);
        hash.set(frontPlayer,hash.get(player) + 1);
        
    })

    return players;
    
}






