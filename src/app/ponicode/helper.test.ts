import * as helper from "../helper";
// @ponicode
describe("helper.getRandomInt", () => {
  test("0", () => {
    let result: any = helper.getRandomInt(undefined, undefined);
    expect(result).toBe(NaN);
  });

  test("1", () => {
    let result: any = helper.getRandomInt(-100, 0);
    expect(result).toBe(-70);
  });

  test("2", () => {
    let result: any = helper.getRandomInt(0, -1);
    expect(result).toBe(-1);
  });
});
