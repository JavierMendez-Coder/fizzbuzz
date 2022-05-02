const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.filterByMission(explorers, mission);
  }

  static getExplorersByStack(stack) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.filterByStack(explorers, stack);
  }

  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
  }

  static getExplorersAmountByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
  }

  static applyValidationInNumber(number) {
    return FizzbuzzService.applyValidationInNumber(number);
  }

  static getStringOfExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getStringOfExplorersUsernamesByMission(explorers, mission);
  }
}

module.exports = ExplorerController;
