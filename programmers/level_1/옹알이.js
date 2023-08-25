function solution(babbling) {
  const SPEAKABLE_WORDS = {
    a: ["aya", 3],
    y: ["ye", 2],
    w: ["woo", 3],
    m: ["ma", 2],
  };
  const isSpeakable = (word) => {
    let i = 0;
    let prevWord = "";
    while (i < word.length) {
      const char = word[i];
      if (!(char in SPEAKABLE_WORDS)) {
        return false;
      }
      const [nextWord, length] = SPEAKABLE_WORDS[char];
      if (
        prevWord === nextWord ||
        i + length > word.length ||
        word.substring(i, i + length) !== nextWord
      ) {
        return false;
      }
      i += length;
      prevWord = nextWord;
    }
    return true;
  };
  return babbling.filter(isSpeakable).length;
}

module.exports = solution;

/** 
 * 문자열 검사는 정규식 적용이 이상적
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}
*/
