function solution(wallpaper) {
  /**
   * 가장 위, 가장 왼쪽, 가장 오른쪽, 가장 아래쪽 찾는 문제
   * 최초로 #을 발견된 row: acc[0]
   * 마지막으로 #이 발견된 row: acc[2]
   * 최초로 #이 발견된 column: acc[1]
   * 마지막으로 #이 발견된 column: acc[3]
   * */
  const points = wallpaper.reduce(
    (acc, cur, idx) => {
      const firstIndex = cur.indexOf("#");
      const lastIndex = cur.lastIndexOf("#");
      if (firstIndex === -1) return acc;
      if (acc[0] === -1) acc[0] = idx;
      if (firstIndex <= acc[1]) acc[1] = firstIndex;
      acc[2] = idx + 1;
      if (lastIndex >= acc[3]) acc[3] = lastIndex + 1;
      return acc;
    },
    [-1, 900, -1, -1]
  );
  return points;
}

solution([".#...", "..#..", "...#."]);
solution([
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
]);
solution([
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
]);
solution(["..", "#."]);
