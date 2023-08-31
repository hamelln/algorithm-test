function solution(ingredient) {
  let answer = 0;
  const start = ingredient.indexOf(1);
  const stack = [];
  stack.push(ingredient[start]);
  stack.push(ingredient[start + 1]);
  stack.push(ingredient[start + 2]);

  const checkAndPop = (stack) => {
    if (
      stack.at(-4) === 1 &&
      stack.at(-3) === 2 &&
      stack.at(-2) === 3 &&
      stack.at(-1) === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      answer++;
    }
  };

  for (let i = start + 3; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    checkAndPop(stack);
  }

  return answer;
}
