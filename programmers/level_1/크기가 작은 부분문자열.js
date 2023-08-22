function solution(t, p) {
  const BIG_NUM_STRING = t.length >= p.length ? t : p;
  const SMALL_NUM_STRING = BIG_NUM_STRING === t ? p : t;
  const SMALL_NUM_LENGTH = SMALL_NUM_STRING.length;
  const SMALL_NUM = Number(SMALL_NUM_STRING);
  let answer = 0;
  for (let i = 0; i <= BIG_NUM_STRING.length - SMALL_NUM_LENGTH; i++) {
    const num = Number(BIG_NUM_STRING.substring(i, i + SMALL_NUM_LENGTH));
    if (num <= SMALL_NUM) {
      answer++;
    }
  }
  return answer;
}
