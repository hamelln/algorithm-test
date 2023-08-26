function solution(s, skip, index) {
  const alphabetList = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  ).filter((alphabet) => !skip.includes(alphabet));

  return s.split("").reduce((answer, alphabet) => {
    const i = alphabetList.findIndex((v) => v === alphabet);
    answer += alphabetList[(i + index) % alphabetList.length];
    return answer;
  }, "");
}
