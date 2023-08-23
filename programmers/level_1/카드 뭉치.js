function solution(cards1, cards2, goal) {
  let [i1, i2] = [0, 0];
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[i1]) {
      i1++;
    } else if (goal[i] === cards2[i2]) {
      i2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}
