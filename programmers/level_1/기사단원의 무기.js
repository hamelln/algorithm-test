function solution(number, limit, power) {
  const calcPower = (number) => {
    const divisors = new Map();
    let n = 2;
    while (number > 1) {
      if (number % n === 0) {
        const exp = divisors.get(n) ?? 1;
        divisors.set(n, exp + 1);
        number /= n;
        n = 2;
      } else {
        n++;
      }
    }

    let strength = 1;
    divisors.forEach((exp) => {
      strength *= exp;
    });
    if (strength > limit) {
      return power;
    }
    return strength;
  };

  const knights = Array.from({ length: number }, (_, i) => i + 1);
  const powers = knights.map(calcPower);
  return powers.reduce((a, b) => a + b, 0);
}
