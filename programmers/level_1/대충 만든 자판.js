function solution(keymap, targets) {
  const shortestKeyObject = keymap.reduce((keyObj, keyString) => {
    for (let i = 0; i < keyString.length; i++) {
      const key = keyString[i];
      if (!(key in keyObj) || keyObj[key] > i) {
        keyObj[key] = i + 1;
      }
    }
    return keyObj;
  }, {});

  const findShortestIndex = (target) => {
    let sum = 0;
    for (const char of target) {
      if (!(char in shortestKeyObject)) {
        return -1;
      }
      sum += shortestKeyObject[char];
    }
    return sum;
  };
  const result = targets.map(findShortestIndex);
  return result;
}

solution(["AGZ", "BSSS"], ["ASA", "BGZ"]);
