const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {
  test("Test getExplorersByMission() method", () => {
    const mission = "node";
    const filteredExplorers = ExplorerController.getExplorersByMission(mission);

    const areExplorerFromNode = filteredExplorers.every(
      (explorer) => explorer.mission === "node"
    );

    expect(areExplorerFromNode).toBeTruthy();
  });

  test("Test getExplorersAmountByMission() method", () => {
    const mission = "node";
    const filteredExplorersAmount =
      ExplorerController.getExplorersAmountByMission(mission);

    expect(filteredExplorersAmount).toBe(10);
  });

  test("Test getExplorersUsernamesByMission() method", () => {
    const mission = "node";
    const filteredExplorersUsernames =
      ExplorerController.getExplorersUsernamesByMission(mission);

    const expectedList = [
      "ajolonauta1",
      "ajolonauta2",
      "ajolonauta3",
      "ajolonauta4",
      "ajolonauta5",
      "ajolonauta11",
      "ajolonauta12",
      "ajolonauta13",
      "ajolonauta14",
      "ajolonauta15",
    ];

    expect(filteredExplorersUsernames).not.toBeUndefined();
    expect(filteredExplorersUsernames.join()).toBe(expectedList.join());
  });
  
  test("Test applyValidationInNumber() method", () => {
    const numbersToValidate = [1, 3, 5, 15, 20, 23, 30, 33];

    const fizzbuzzList = numbersToValidate.map((number) =>
      ExplorerController.applyValidationInNumber(number)
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
