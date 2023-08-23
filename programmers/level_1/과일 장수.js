function solution(k, m, score) {
  score.sort((a, b) => a - b);

  if (score.length % m !== 0) {
    score.splice(0, score.length % m);
  }

  let result = 0;
  for (let i = 0; i < score.length; i += m) {
    result += score[i] * m;
  }

  return result;
}
