const solution = require("../programmers/level_3/스티커 모으기.js");

it("예제 1", () => {
  const input = [14, 6, 5, 11, 3, 9, 2, 10];
  const output = 36;
  expect(solution(input)).toEqual(output);
});

it("예제 2", () => {
  const input = [1, 3, 2, 5, 4];
  const output = 8;
  expect(solution(input)).toEqual(output);
});
