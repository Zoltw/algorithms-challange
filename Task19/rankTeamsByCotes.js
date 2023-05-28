const rankTeams = (votes) => {
    const map = {};
  
    for (const vot of votes[0]) map[vot] = Array(votes[0].length).fill(0);
  
    for (const vote of votes) {
      for (let i = 0; i < vote.length; i++) {
        map[vote[i]][i]++;
      }
    }
  
    return Object.keys(map).sort((a, b) => {
      for (let i = 0; i < votes[0].length; i++) {
        if (map[b][i] !== map[a][i]) return map[b][i] - map[a][i];
      }
  
      return a > b ? 1 : -1;
    }).join('');
  };
  