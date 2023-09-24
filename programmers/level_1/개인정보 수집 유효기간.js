function solution(today, terms, privacies) {
  const termsObject = terms.reduce((acc, cur) => {
    const [term, expiration] = cur.split(" ");
    acc[term] = Number(expiration);
    return acc;
  }, {});

  const digitizeDay = (day) => day.split(".").map(Number);

  const isExpiration = (expirationDay) => {
    if (digitizeToday[0] > expirationDay[0]) return true;
    if (digitizeToday[0] < expirationDay[0]) return false;
    if (digitizeToday[1] > expirationDay[1]) return true;
    if (digitizeToday[1] < expirationDay[1]) return false;
    if (digitizeToday[2] >= expirationDay[2]) return true;
    return false;
  };

  const calculateExpirationDay = (joinDay, term) => {
    const expirationMonth = termsObject[term];
    const [year, month, day] = digitizeDay(joinDay);
    let newMonth = month + expirationMonth;
    let newYear = year;
    let newDay = day - 1;
    if (newDay === 0) {
      newDay = 28;
      newMonth--;
    }
    while (newMonth > 12) {
      newMonth -= 12;
      newYear += 1;
    }
    return [newYear, newMonth, newDay];
  };

  const digitizeToday = digitizeDay(today);

  const answer = privacies.reduce((acc, cur, idx) => {
    const [joinDay, term] = cur.split(" ");
    const expirationDay = calculateExpirationDay(joinDay, term);
    if (isExpiration(expirationDay)) acc.push(idx + 1);
    return acc;
  }, []);

  return answer;
}

solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);
