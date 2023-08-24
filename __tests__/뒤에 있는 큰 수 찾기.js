const solution = require("../programmers/level_2/뒤에 있는 큰 수 찾기.js");

test("예제 1", () => {
  const input = [2, 3, 3, 5];
  const output = [3, 5, 5, -1];
  expect(solution(input)).toEqual(output);
});

test("예제 2", () => {
  const input = [9, 1, 5, 3, 6, 2];
  const output = [-1, 5, 6, 6, -1, -1];
  expect(solution(input)).toEqual(output);
});
