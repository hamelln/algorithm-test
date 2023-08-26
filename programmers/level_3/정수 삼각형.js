function solution(triangle) {
  let dp = Array.from({ length: triangle.length }, () => []);
  dp[triangle.length - 1] = triangle.at(-1);

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
}

module.exports = solution;
