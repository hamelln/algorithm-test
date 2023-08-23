function solution(genres, plays) {
  const summarized = genres.reduce((acc, genre, idx) => {
    const play = plays[idx];
    if (!(genre in acc)) {
      acc[genre] = { sum: play, playlist: [[play, idx]] };
    } else {
      acc[genre]["sum"] += play;
      const playlist = acc[genre]["playlist"];
      if (playlist.length === 1 || playlist[1][0] < play) {
        playlist.push([play, idx]);
        playlist.sort((a, b) => b[0] - a[0]);
        playlist.length = 2;
      }
    }
    return acc;
  }, {});

  const arranged = Object.entries(summarized).sort(
    ([, a], [, b]) => b.sum - a.sum
  );
  const result = arranged.reduce((acc, cur) => {
    cur[1].playlist.map(([play, index]) => {
      acc.push(index);
    });
    return acc;
  }, []);
  return result;
}
