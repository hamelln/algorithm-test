const solution = require("../programmers/level_1/문자열 나누기.js");

test("예제 1", () => {
  const input = ["banana"];
  const output = 3;
  expect(solution(...input)).toBe(output);
});

test("예제 2", () => {
  const input = ["abracadabra"];
  const output = 6;
  expect(solution(...input)).toBe(output);
});

test("예제 3", () => {
  const input = ["aaabbaccccabba"];
  const output = 3;
  expect(solution(...input)).toBe(output);
});
