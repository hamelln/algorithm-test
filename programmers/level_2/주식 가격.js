function solution(prices) {
  let result = new Array(prices.length).fill(0);
  result = prices.reduce((acc, price, idx) => {
    for (let i = idx + 1; i < acc.length; i++) {
      const otherPrice = prices[i];
      if (price > otherPrice) {
        acc[idx] = i - idx;
        return acc;
      }
    }
    acc[idx] = acc.length - idx - 1;
    return acc;
  }, result);

  return result;
}

module.exports = solution;
