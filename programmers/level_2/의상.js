function solution(clothes) {
  const categorizedMap = clothes.reduce((acc, [_, category]) => {
    if (category in acc) acc[category]++;
    else acc[category] = 1;
    return acc;
  }, {});

  const result = Object.values(categorizedMap).reduce((a, b) => a * (b + 1), 1);
  return result - 1;
}
