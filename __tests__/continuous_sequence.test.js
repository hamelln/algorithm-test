const solution = require("../programmers/level_2/연속된 부분 수열의 합.js");

it("예제 1", () => {
  const input = [[1, 2, 3, 4, 5], 7];
  const output = [2, 3];
  expect(solution(...input)).toEqual(output);
});

it("예제 2", () => {
  const input = [[1, 1, 1, 2, 3, 4, 5], 5];
  const output = [6, 6];
  expect(solution(...input)).toEqual(output);
});

it("예제 3", () => {
  const input = [[2, 2, 2, 2, 2], 6];
  const output = [0, 2];
  expect(solution(...input)).toEqual(output);
});
