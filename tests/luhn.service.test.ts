import { expect, test, describe } from "bun:test";
import { LuhnService } from "../src/services/luhn.service";

describe("LuhnService", () => {
  const luhnService = new LuhnService();

  test("should validate correct card numbers", () => {
    // Standard test case (Visa)
    expect(luhnService.validate("49927398716")).toBe(true);
    // Another valid number
    expect(luhnService.validate("79927398713")).toBe(true);
  });

  test("should reject invalid card numbers", () => {
    expect(luhnService.validate("49927398717")).toBe(false);
    expect(luhnService.validate("1234567812345670")).toBe(false);
  });

  test("should handle numbers with spaces or dashes", () => {
    expect(luhnService.validate("4992 7398 716")).toBe(true);
    expect(luhnService.validate("4992-7398-716")).toBe(true);
  });

  test("should return false for empty or non-digit strings", () => {
    expect(luhnService.validate("")).toBe(false);
    expect(luhnService.validate("abc")).toBe(false);
  });
});
