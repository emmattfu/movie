import { getPages } from "./helpers";

test("getPages", () => {
  expect(getPages(1)).toMatchObject([1]);
  expect(getPages(10)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
