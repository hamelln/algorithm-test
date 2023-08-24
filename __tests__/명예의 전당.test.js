const solution = require("../programmers/level_1/명예의 전당(1).js");

test("예제 1", () => {
  const input = [3, [10, 100, 20, 150, 1, 100, 200]];
  const output = [10, 10, 10, 20, 20, 100, 100];
  expect(solution(...input)).toEqual(output);
});

test("예제 2", () => {
  const input = [4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]];
  const output = [0, 0, 0, 0, 20, 40, 70, 70, 150, 300];
  expect(solution(...input)).toEqual(output);
});
