const solution = require("../programmers/level_2/주식 가격.js");

test("예제 1", () => {
  const input = [1, 2, 3, 2, 3];
  const output = [4, 3, 1, 1, 0];
  expect(solution(input)).toEqual(output);
});
