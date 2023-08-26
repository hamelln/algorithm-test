const solution = require("../programmers/level_2/택배 상자.js");

test("예제 1", () => {
  const input = [4, 3, 1, 2, 5];
  const output = 2;
  expect(solution(input)).toBe(output);
});

test("예제 2", () => {
  const input = [5, 4, 3, 2, 1];
  const output = 5;
  expect(solution(input)).toBe(output);
});
