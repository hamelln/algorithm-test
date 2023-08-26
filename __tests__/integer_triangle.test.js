const solution = require("../programmers/level_3/정수 삼각형.js");

it("예제 1", () => {
  const input = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
  const output = 30;
  expect(solution(input)).toEqual(output);
});
