import spaceship from "../src/spaceship";

describe("The only test suite I have...", () => {
  test("It works when lhs <= rhs", () => {
    expect(spaceship(5, 10)).toBe(-1);
  });

  test("It works when lhs === rhs", () => {
    expect(spaceship(5, 5)).toBe(0);
  });

  test("It works when lhs >= rhs", () => {
    expect(spaceship(10, 5)).toBe(1);
  });
});
