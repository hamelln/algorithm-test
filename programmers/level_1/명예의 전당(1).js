function solution(k, score) {
  let minScore = 0;
  const answer = score.reduce((acc, currentScore) => {
    if (acc.length === 0) {
      minScore = currentScore;
    }
    if (acc.length > k) {
      if (minScore > currentScore) minScore = currentScore;
    }
    acc.push(minScore);
    return acc;
  }, []);
  return answer;
}
