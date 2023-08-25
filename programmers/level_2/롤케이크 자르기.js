function solution(topping) {
  let result = 0;
  const set = new Set([topping.pop()]);
  const map = topping.reduce((acc, num) => {
    acc.set(num, acc.get(num) ? acc.get(num) + 1 : 1);
    return acc;
  }, new Map());

  const isEqual = (set, map) => set.size === map.size;
  if (isEqual(set, map)) result++;

  while (topping.length > 1) {
    const n = topping.pop();
    set.add(n);
    if (map.get(n) > 1) map.set(n, map.get(n) - 1);
    else map.delete(n);
    if (isEqual(set, map)) result++;
  }
  return result;
}

module.exports = solution;
