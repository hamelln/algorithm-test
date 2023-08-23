// includes로 확인하는 것보다 객체 key로서 조회하는 게 훨씬 빠르다.

function solution(phone_book) {
  let answer = true;
  const obj = {};
  for (const phoneNumber of phone_book) {
    obj[phoneNumber] = 1;
  }
  for (const phoneNumber of phone_book) {
    temp = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      temp += phoneNumber[i];
      if (temp in obj && temp !== phoneNumber) {
        answer = false;
      }
    }
  }
  return answer;
}
