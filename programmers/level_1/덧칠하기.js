function solution(n, m, section) {
  if (m === 1) return section.length;

  const [currentPoint, limit, result] = section.reduce(
    (acc, p) => {
      if (acc[0] === -1 || p > acc[1]) {
        acc[0] = p;
        acc[1] = p + m - 1;
        acc[2]++;
      }
      return acc;
    },
    [-1, 0, 0]
  );
  return result;
}
