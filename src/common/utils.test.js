import {
  transformUtf8,
  checkFloat,
  addZeros,
  isDate,
  bubbleSort
} from "./utils";

// Should transform characters to utf-8 and mayus
test("test transformUtf8", () => {
  const text = "abcdefg";
  const result = transformUtf8(text);
  expect(result).toBe("ABCDEFG");
});

// check that an input is a floating point value
describe("checkFloat function against different input cases", () => {
  test("input number is not a float is an int", () => {
    const intNumber = 17;
    expect(checkFloat(intNumber)).toBeTruthy();
  });
  test("input number is not a float is an String", () => {
    const stringValue = "Test";
    expect(checkFloat(stringValue)).toBeFalsy();
  });
  test("success cause the input number is a float", () => {
    const floatNumber = 17.5;
    expect(checkFloat(floatNumber)).toBeTruthy();
  });
});

describe("add zeros should return incorrect date formated correctly", () => {
  test("check if days are being correctly formatted", () => {
    const date = "9";
    expect(addZeros(date)).toBe("09");
  });
  test("check if months are being correctly formatted", () => {
    const month = "1";
    expect(addZeros(month)).toBe("01");
  });
  test("check if full date can be correctly formatted", () => {
    const days = "1";
    const month = "1";
    const year = "2019";
    const formattedDays = addZeros(days);
    const formattedMonth = addZeros(month);
    const formattedDate = `${formattedDays}.${formattedMonth}.${year}`;
    expect(formattedDate).toBe("01.01.2019");
  });
});

describe("test different cases for inputs that are similar to dates", () => {
  test("is data should fail with incorrect string", () => {
    const input = "05.X.2019";
    const result = isDate(input);
    expect(result).toBeFalsy();
  });
  test("should be correct given that the date is good to go", () => {
    const input = "05.05.2019";
    const result = isDate(input);
    expect(result).toBeTruthy();
  });
});

describe("check against different bubbleSort cases", () => {
  // Test input
  let unsortedList = [
    { project: 1 },
    { project: 6 },
    { project: 5 },
    { project: 2 },
    { project: 3 },
    { project: 8 },
    { project: 4 }
  ];
  let sortedListAsc = [
    { project: 1 },
    { project: 2 },
    { project: 3 },
    { project: 4 },
    { project: 5 },
    { project: 6 },
    { project: 8 }
  ];
  let sortedListDesc = [
    { project: 8 },
    { project: 6 },
    { project: 5 },
    { project: 4 },
    { project: 3 },
    { project: 2 },
    { project: 1 }
  ];
  // Test cases
  test("should order asc correctly", () => {
    expect(bubbleSort(unsortedList, "ASC")).toEqual(sortedListAsc);
  });
  test("should order desc correctly", () => {
    expect(bubbleSort(unsortedList, "DESC")).toEqual(sortedListDesc);
  });
});
