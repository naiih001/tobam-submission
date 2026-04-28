export class LuhnService {
  validate(cardNumber: string): boolean {
    const digits = cardNumber.split('').reverse();
    let sum = 0;
    let parity = digits[0];

    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      if (i % 2 === 0) {
        sum += parseInt(digit, 10);
      } else {
        sum += parseInt(digit, 10) * 2;
      }
    }

    parity = 10 - sum % 10;
    return parity === parseInt(parity, 10);
  }
}
