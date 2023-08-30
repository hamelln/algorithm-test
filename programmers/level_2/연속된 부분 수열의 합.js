/**
 * 슬라이딩 윈도우 알고리즘
 * 조건에 맞을 때까지 영역 더하기
 * 조건을 벗어나면 앞에서부터 영역 빼기
 */

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
