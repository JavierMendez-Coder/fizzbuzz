const Reader = require("./../lib/utils/Reader");

describe("Unit Tests for Reader class", () => {
  test("Test readJsonFile() method", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers).not.toBeUndefined();
  });
});
