import { readFiles, getResult } from "../bin";
import { sort1, sort2, sort3 } from "../utils/sort";
import { inputMock } from "./constants";

test("readFiles", () => {
  expect(readFiles()).toEqual(expect.arrayContaining(inputMock));
});

test("getResult", () => {
  const sort1MockData = sort1(inputMock);
  const sort1MockResult = getResult(sort1MockData);
  const sort2MockData = sort2(inputMock);
  const sort2MockResult = getResult(sort2MockData);
  const sort3MockData = sort3(inputMock);
  const sort3MockResult = getResult(sort3MockData);

  expect(sort1MockResult).toBe(
    "Hingis Martina Female 4/2/1979 Green\n" +
      "Kelly Sue Female 7/12/1959 Pink\n" +
      "Kournikova Anna Female 6/3/1975 Red\n" +
      "Seles Monica Female 12/2/1973 Black\n" +
      "Abercrombie Neil Male 2/13/1943 Tan\n" +
      "Bishop Timothy Male 4/23/1967 Yellow\n" +
      "Bonk Radek Male 6/3/1975 Green\n" +
      "Bouillon Francis Male 6/3/1975 Blue\n" +
      "Smith Steve Male 3/3/1985 Red\n"
  );

  expect(sort2MockResult).toBe(
    "Abercrombie Neil Male 2/13/1943 Tan\n" +
      "Kelly Sue Female 7/12/1959 Pink\n" +
      "Bishop Timothy Male 4/23/1967 Yellow\n" +
      "Seles Monica Female 12/2/1973 Black\n" +
      "Bonk Radek Male 6/3/1975 Green\n" +
      "Bouillon Francis Male 6/3/1975 Blue\n" +
      "Kournikova Anna Female 6/3/1975 Red\n" +
      "Hingis Martina Female 4/2/1979 Green\n" +
      "Smith Steve Male 3/3/1985 Red\n"
  );

  expect(sort3MockResult).toBe(
    "Smith Steve Male 3/3/1985 Red\n" +
      "Seles Monica Female 12/2/1973 Black\n" +
      "Kournikova Anna Female 6/3/1975 Red\n" +
      "Kelly Sue Female 7/12/1959 Pink\n" +
      "Hingis Martina Female 4/2/1979 Green\n" +
      "Bouillon Francis Male 6/3/1975 Blue\n" +
      "Bonk Radek Male 6/3/1975 Green\n" +
      "Bishop Timothy Male 4/23/1967 Yellow\n" +
      "Abercrombie Neil Male 2/13/1943 Tan\n"
  );
});
