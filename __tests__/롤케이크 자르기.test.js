const solution = require("../programmers/level_2/롤케이크 자르기.js");

test("예제 1", () => {
  const input = [[1, 2, 1, 3, 1, 4, 1, 2]];
  const output = 2;
  expect(solution(...input)).toBe(output);
});

test("예제 2", () => {
  const input = [[1, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10]];
  const output = 1;
  expect(solution(...input)).toBe(output);
});
