function solution(s) {
  let count = 1;
  let originWord = s[0];
  let originCount = 1;
  let otherCount = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === originWord) originCount++;
    else otherCount++;
    if (originCount === otherCount) {
      if (i + 1 < s.length) {
        originWord = s[i + 1];
        originCount = 0;
        otherCount = 0;
        count++;
      }
    }
  }

  return count;
}

module.exports = solution;
