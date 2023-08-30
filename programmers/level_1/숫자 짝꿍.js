/**
 * boundary 1: 공통되는 수가 없음.
 */

function solution(X, Y) {
  const x = {};
  const y = {};
  const nums = [];

  // { 1: 1, 0: 2}
  // { 2: 1, 3: 1, ...}
  for (let i = 0; i < X.length; i++) {
    const num = X[i];
    if (num in x) x[num]++;
    else x[num] = 0;
  }
  for (let j = 0; j < Y.length; j++) {
    const num = Y[j];
    if (num in y) y[num]++;
    else y[num] = 0;
  }
  for (let k = 9; k >= 0; k--) {
    const key = String(k);
    if (key in x && key in y) {
      const count = Math.min(x[key], y[key]);
      for (let z = 0; z <= count; z++) nums.push(k);
    }
  }

  if (nums.length === 0) return "-1";
  if (nums[0] === 0) return "0";
  return nums.join("");
}
