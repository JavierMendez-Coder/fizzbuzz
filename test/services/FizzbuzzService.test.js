const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService class", () => {
  test("Test applyValidationInExplorer() method", () => {
    const explorersListToValidate = [
      { name: "Explorer1", score: 1 },
      { name: "Explorer3", score: 3 },
      { name: "Explorer5", score: 5 },
      { name: "Explorer15", score: 15 },
    ];

    const fizzbuzzList = explorersListToValidate.map((explorer) =>
      FizzbuzzService.applyValidationInExplorer(explorer)
    );

    expect(Object.keys(fizzbuzzList[0])).not.toContain("trick");
    expect(fizzbuzzList[0].trick).toBeUndefined();
    expect(fizzbuzzList[1].trick).toBe("FIZZ");
    expect(fizzbuzzList[2].trick).toBe("BUZZ");
    expect(fizzbuzzList[3].trick).toBe("FIZZBUZZ");
  });

  test("Test applyValidationInNumber() method", () => {
    const numbersToValidate = [1, 3, 5, 15, 20, 23, 30, 33];

    const fizzbuzzList = numbersToValidate.map((number) =>
      FizzbuzzService.applyValidationInNumber(number)
    );

    expect(fizzbuzzList[0]).toBe(numbersToValidate[0]);
    expect(fizzbuzzList[1]).toBe("FIZZ");
    expect(fizzbuzzList[2]).toBe("BUZZ");
    expect(fizzbuzzList[3]).toBe("FIZZBUZZ");
    expect(fizzbuzzList[4]).toBe("BUZZ");
    expect(fizzbuzzList[5]).toBe(numbersToValidate[5]);
    expect(fizzbuzzList[6]).toBe("FIZZBUZZ");
    expect(fizzbuzzList[7]).toBe("FIZZ");
  });
});
