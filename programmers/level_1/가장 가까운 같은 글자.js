function solution(s) {
  const keyIndexObject = {};
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in keyIndexObject)) {
      result.push(-1);
    } else {
      result.push(i - keyIndexObject[char]);
    }
    keyIndexObject[char] = i;
  }
  return result;
}

const r = solution("banana");
console.log(r);
