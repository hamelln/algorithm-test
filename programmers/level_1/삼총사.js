const findCombinations = (nums, k = 3) => {
  const result = [];

  function backtrack(start, currentCombination) {
    if (currentCombination.length === k) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      currentCombination.push(nums[i]);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  backtrack(0, []);
  return result;
};

const isZeroSum = (nums) => 0 === nums.reduce((a, b) => a + b, 0);

function solution(number) {
  const combinations = findCombinations(number);
  return combinations.filter(isZeroSum).length;
}
