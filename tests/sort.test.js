import { sort1, sort2, sort3 } from "../utils/sort";
import { inputMock } from "./constants";

test("sort1", () => {
  const sort1MockData = sort1(inputMock);
  expect(sort1MockData[0].gender).toBe("Female");
  expect(
    sort1MockData[1].lastName.localeCompare(sort1MockData[0].lastName)
  ).toBe(1);
});

test("sort2", () => {
  const sort2MockData = sort2(inputMock);
  expect(
    new Date(sort2MockData[1].dateOfBirth) -
      new Date(sort2MockData[0].dateOfBirth)
  ).toBeGreaterThan(0);
  expect(
    sort2MockData[1].lastName.localeCompare(sort2MockData[0].lastName)
  ).toBe(1);
});

test("sort3", () => {
  const sort3MockData = sort3(inputMock);
  expect(
    sort3MockData[1].lastName.localeCompare(sort3MockData[0].lastName)
  ).toBe(-1);
});
