function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  const dp1 = [sticker[0], sticker[0]];
  const dp2 = [0, sticker[1]];

  for (let i = 2; i < sticker.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }
  for (let i = 2; i < sticker.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1.at(-1), dp2.at(-1));
}

console.log(solution([10])); // 36

module.exports = solution;
