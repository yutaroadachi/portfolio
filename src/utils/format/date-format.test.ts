import { formatYYYYMMDD } from "./date-format";

describe("formatYYYYMMDD", () => {
  it("YYYY/MM/DDの形式で日付文字列が返されること", () => {
    expect(formatYYYYMMDD(new Date("2019-01-01"))).toEqual("2019/1/1");
  });
});
