function solution(storey) {
  const nums = String(storey).split("").map(Number);

  return nums.reduceRight((acc, cur, idx, arr) => {
    if (idx === 0) {
      return cur < 5 ? acc + cur : acc + 11 - cur;
    }

    if (cur < 5 || (cur === 5 && arr[idx - 1] < 5)) {
      return acc + cur;
    }

    arr[idx - 1]++;

    return cur >= 10 ? acc : acc + 10 - cur;
  }, 0);
}

console.log(solution(5555));
console.log(solution(5));
console.log(solution(6565));
