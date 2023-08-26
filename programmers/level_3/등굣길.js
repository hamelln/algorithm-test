function solution(m, n, puddles) {
  const roads = Array.from({ length: n }, () => new Array(m).fill(0));
  roads[0][0] = 1;
  for (const [x, y] of puddles) {
    roads[y - 1][x - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (roads[i][j] === -1) {
        roads[i][j] = 0;
        continue;
      }
      if (i !== 0) roads[i][j] += roads[i - 1][j] % 1_000_000_007;
      if (j !== 0) roads[i][j] += roads[i][j - 1] % 1_000_000_007;
    }
  }

  return roads[n - 1][m - 1] % 1_000_000_007;
}

module.exports = solution;
