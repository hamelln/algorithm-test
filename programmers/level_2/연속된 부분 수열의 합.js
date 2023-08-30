function solution(sequence, k) {
  let answer = [-1000000, 1000000];
  let i = 0;
  let sum = 0;
  for (let j = 0; j < sequence.length; j++) {
    sum += sequence[j];
    while (sum > k && i < j) {
      sum -= sequence[i];
      i++;
    }
    if (sum === k && j - i < answer[1] - answer[0]) {
      answer = [i, j];
    }
  }

  return answer;
}

module.exports = solution;
