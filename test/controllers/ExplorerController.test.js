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
});
