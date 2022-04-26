const FizzbuzzService = require("./../lib/services/FizzbuzzService");

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
});
