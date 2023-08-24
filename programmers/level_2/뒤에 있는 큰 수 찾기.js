function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    // 이번에 조회하는 숫자가 먼젓번에 나온 수보다 큰지 확인
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      // 해당된다면 result 업데이트
      const prevIndex = stack.pop();
      result[prevIndex] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}

solution([9, 1, 5, 3, 6, 2]);

module.exports = solution;
