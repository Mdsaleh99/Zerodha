import { describe, test, expect } from "@jest/globals";
import { add, subtract } from "./sum.js";

describe("Math functions", () => {
  test("add function should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract function should return the difference of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
