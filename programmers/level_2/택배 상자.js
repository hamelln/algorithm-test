function solution(order) {
  const assist = [];
  let [i, count] = [1, 0];
  while (i < order.length + 1) {
    assist.push(i++);
    while (assist.length > 0 && assist.at(-1) === order[count]) {
      count++;
      assist.pop();
    }
  }
  return count;
}

module.exports = solution;
