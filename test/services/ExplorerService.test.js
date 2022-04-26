const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit Tests for ExplorerService class", () => {
  test("Test filterByMission() method", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const mission = "node";
    const filteredExplorers = ExplorerService.filterByMission(
      explorers,
      mission
    );

    const areExplorerFromNode = filteredExplorers.every(
      (explorer) => explorer.mission === "node"
    );

    expect(areExplorerFromNode).toBeTruthy();
  });

  test("Test getAmountOfExplorers() method", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const mission = "node";
    const filteredExplorersAmount =
      ExplorerService.getAmountOfExplorersByMission(explorers, mission);

    const explorersFromNodeAmount = explorers.filter(
      (explorer) => explorer.mission === "node"
    ).length;

    expect(filteredExplorersAmount).toBe(explorersFromNodeAmount);
    expect(filteredExplorersAmount).toBe(10); // Current amount, in case of adding more explorers from the "node" mission update/delete
  });

  test("Test getExplorersUsernameByMission() method", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const mission = "node";
    const filteredExplorersUsernames =
      ExplorerService.getExplorersUsernameByMission(explorers, mission);

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
