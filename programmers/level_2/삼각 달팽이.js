function solution(n) {
  const MAX_NUMBER = (n * (n + 1)) / 2;
  if (n < 3) return Array.from({ length: MAX_NUMBER }, (_, i) => i + 1);
  const result = Array.from({ length: MAX_NUMBER }).fill(0);
  let [i, j, num, cycleTimes] = [0, 0, 1, 1];

  const goDown = (cycleTimes) => {
    while (j++ <= n - cycleTimes) {
      result[i] = num++;
      i += j;
    }
    i -= j - 1;
  };

  const goRight = (cycleTimes) => {
    let cnt = 0;
    const limit = n - 1 - (cycleTimes - 1) * 3;
    while (cnt++ < limit) {
      result[++i] = num++;
    }
    j--;
  };

  const goUp = () => {
    while (i !== 2 * cycleTimes * cycleTimes) {
      i -= j;
      j--;
      result[i] = num++;
    }
    i += j;
  };

  while (num < MAX_NUMBER) {
    goDown(cycleTimes);
    goRight(cycleTimes);
    goUp();
    cycleTimes++;
    if (num === MAX_NUMBER) result[i] = MAX_NUMBER;
  }
  return result;
}

module.exports = solution;
