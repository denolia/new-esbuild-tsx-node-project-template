import { myFunc } from "@app/app";

describe("True", () => {
  test("True", () => {
    const mockFn = jest.fn();
    mockFn();
    myFunc();
    expect(true).toBe(true);
  });
});
