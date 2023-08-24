const solution = require("../programmers/level_2/숫자 변환하기.js");

test("예제 1", () => {
  const input = [10, 40, 5];
  const output = 2;
  expect(solution(...input)).toBe(output);
});

test("예제 2", () => {
  const input = [10, 40, 30];
  const output = 1;
  expect(solution(...input)).toBe(output);
});

test("예제 3", () => {
  const input = [2, 5, 4];
  const output = -1;
  expect(solution(...input)).toBe(output);
});
