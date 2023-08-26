const solution = require("../programmers/level_2/삼각 달팽이.js");

test("예제 1", () => {
  const input = 4;
  const output = [1, 2, 9, 3, 10, 8, 4, 5, 6, 7];
  expect(solution(input)).toEqual(output);
});

test("예제 2", () => {
  const input = 5;
  const output = [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9];
  expect(solution(input)).toEqual(output);
});

test("예제 3", () => {
  const input = 6;
  const output = [
    1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11,
  ];
  expect(solution(input)).toEqual(output);
});
