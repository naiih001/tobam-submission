export class LuhnService {
  /**
   * Validates a credit card number using the Luhn algorithm.
   * @param cardNumber The card number as a string.
   * @returns boolean true if valid, false otherwise.
   */
  public validate(cardNumber: string): boolean {
    const sanitized = cardNumber.replace(/\D/g, '');
    
    if (sanitized.length === 0) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Iterate from right to left
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }
}
