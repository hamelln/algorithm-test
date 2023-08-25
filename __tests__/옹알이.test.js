const solution = require("../programmers/level_1/옹알이.js");

test("예제 1", () => {
  const input = ["aya", "yee", "u", "maa"];
  const output = 1;
  expect(solution(input)).toBe(output);
});

test("예제 2", () => {
  const input = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
  const output = 2;
  expect(solution(input)).toBe(output);
});
